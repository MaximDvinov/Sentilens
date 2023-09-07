package org.senti.lens.db

import io.realm.kotlin.Realm
import io.realm.kotlin.ext.query
import io.realm.kotlin.query.Sort
import io.realm.kotlin.types.BaseRealmObject
import io.realm.kotlin.types.TypedRealmObject
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


inline fun <reified T : TypedRealmObject, R : Any> Realm.asFlowMap(
    query: String,
    vararg args: Any,
    sortField: String? = null,
    sort: Sort = Sort.DESCENDING,
    crossinline mapper: (T) -> R,
): Flow<List<R>> {
    return if (sortField == null) {
        query<T>(query = query, args = args).asFlow().map { changes ->
            changes.list.map { mapper(it) }
        }
    } else {
        query<T>(query = query, args = args).sort(sortField, sort).asFlow().map { changes ->
            changes.list.map { mapper(it) }
        }
    }
}