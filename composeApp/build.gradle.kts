import org.jetbrains.compose.desktop.application.dsl.TargetFormat

plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.compose)
    alias(libs.plugins.android.application)
    alias(libs.plugins.buildConfig)
    alias(libs.plugins.kotlinx.serialization)

    id("dev.icerock.mobile.multiplatform-resources")
    id("io.realm.kotlin") version "1.10.0"
}

kotlin {
    androidTarget {
        compilations.all {
            kotlinOptions {
                jvmTarget = "17"
            }
        }
    }

    jvm("desktop")

    js {
        browser{

        }
        binaries.executable()
    }


    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(compose.runtime)
                implementation(compose.foundation)
                implementation(compose.material)
                implementation(libs.napier)
                implementation(libs.voyager.navigator)
                implementation(libs.voyager.transitions)
                implementation(libs.composeImageLoader)
                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.ktor.core)
                implementation(libs.ktor.client.content.negotiation)
                implementation(libs.ktor.serialization.kotlinx.json)
                implementation(libs.composeIcons.fontAwesome)
                implementation(libs.kotlinx.serialization.json)
                implementation(libs.kotlinx.datetime)
                implementation(libs.multiplatformSettings)
                implementation(libs.koin.core)
                implementation(libs.mokoResources)
                implementation(libs.mokoResourcesCompose)
                implementation(libs.ktor.client.auth)
                implementation(libs.ktor.client.logging)
                implementation(libs.kamel)
                implementation(libs.kotlinx.collections.immutable)
                implementation(libs.kotlinx.uuid.core)
            }
        }

        val androidMain by getting {
            dependsOn(commonMain)
            dependencies {
                implementation(libs.androidx.appcompat)
                implementation(libs.androidx.activityCompose)
                implementation(libs.compose.uitooling)
                implementation(libs.kotlinx.coroutines.android)
                implementation(libs.ktor.client.okhttp)
                implementation(libs.realm)
                implementation(libs.koin.android)

                compileOnly(libs.realm)
            }
        }

        val desktopMain by getting {
            dependsOn(commonMain)
            dependencies {
                implementation(compose.desktop.common)
                implementation(compose.desktop.currentOs)
                implementation(libs.ktor.client.okhttp)
                implementation(libs.realm)
                implementation(libs.window.styler)
            }
        }

        val jsMain by getting {
            dependsOn(commonMain)
            dependencies {
                implementation(compose.html.core)
                implementation(libs.ktor.client.js)
                implementation(libs.indexeddb.core)
            }
        }
    }
}

multiplatformResources {
    multiplatformResourcesPackage = "org.senti.lens"

}

val version = "1.0.0"

android {
    namespace = "org.senti.lens"
    compileSdk = 34

    defaultConfig {
        minSdk = 26
        targetSdk = 34

        applicationId = "org.senti.lens.androidApp"
        versionCode = 1
        versionName = version
    }
    sourceSets["main"].apply {
        manifest.srcFile("src/androidMain/AndroidManifest.xml")
        res.srcDirs("src/androidMain/resources")
        java.srcDirs("build/generated/moko/androidMain/src")
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    packaging {
        resources.excludes.add("META-INF/**")
    }
    buildTypes {
        getByName("release") {
            signingConfig = signingConfigs.getByName("debug")
        }
    }
    kotlin {
        jvmToolchain(17)
    }
}

compose.desktop {

    application {
        mainClass = "MainKt"

        nativeDistributions {
            targetFormats(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
            packageName = "Sentilens"
            packageVersion = "1.0.0"

            windows {
                iconFile.set(project.file("src/commonMain/resources/icon.ico"))
            }
        }
    }
}

compose.experimental {
    web.application {}
}

dependencies {
    implementation("androidx.window:window:1.1.0")
//    implementation(project(":composeApp"))
}

buildConfig {

}
