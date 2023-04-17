package org.senti.lens.generalElements

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.material.ripple.rememberRipple
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.unit.dp
import org.senti.lens.theme.defaultShape
import org.senti.lens.theme.primary
import org.senti.lens.theme.secondary

@Composable
fun SecondaryIconButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
    enabled: Boolean = true,
    color: Color = secondary,
    content: @Composable () -> Unit,
) {
    val interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
    Box(
        modifier = modifier
            .clip(defaultShape)
            .background(color)
            .clickable(
                onClick = onClick,
                enabled = enabled,
                role = Role.Button,
                interactionSource = interactionSource,
                indication = rememberRipple(bounded = true, radius = 40.dp)
            )
            .minimumInteractiveComponentSize(),
        contentAlignment = Alignment.Center
    ) {
        val contentAlpha = if (enabled) LocalContentAlpha.current else ContentAlpha.disabled
        CompositionLocalProvider(LocalContentAlpha provides contentAlpha, content = content)
    }
}

@Composable
fun PrimaryIconButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
    enabled: Boolean = true,
    color: Color = primary,
    content: @Composable () -> Unit,
) {
    val interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
    Box(
        modifier = modifier
            .shadow(elevation = 10.dp, shape = defaultShape, spotColor = color)
            .clip(defaultShape)
            .background(color)
            .clickable(
                onClick = onClick,
                enabled = enabled,
                role = Role.Button,
                interactionSource = interactionSource,
                indication = rememberRipple(bounded = true, radius = 40.dp)
            )
            .minimumInteractiveComponentSize(),

        contentAlignment = Alignment.Center
    ) {
        val contentAlpha = if (enabled) LocalContentAlpha.current else ContentAlpha.disabled
        CompositionLocalProvider(LocalContentAlpha provides contentAlpha, content = content)
    }
}

@Composable
fun PrimaryButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
    enabled: Boolean = true,
    color: Color = primary,
    content: @Composable RowScope.() -> Unit,
) {
    Button(
        onClick = onClick,
        elevation = ButtonDefaults.elevation(5.dp),
        shape = defaultShape,
        colors = ButtonDefaults.buttonColors(backgroundColor = color),
        modifier = modifier.defaultMinSize(minHeight = 48.dp),
        enabled = enabled,
        content = content
    )
}

@Composable
fun SecondaryButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
    enabled: Boolean = true,
    color: Color = secondary,
    content: @Composable RowScope.() -> Unit,
) {
    Button(
        onClick = onClick,
        elevation = null,
        shape = defaultShape,
        colors = ButtonDefaults.buttonColors(backgroundColor = color),
        modifier = modifier.defaultMinSize(minHeight = 48.dp),
        enabled = enabled,
        content = content
    )
}