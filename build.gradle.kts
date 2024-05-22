plugins {
    alias(libs.plugins.multiplatform).apply(false)
    alias(libs.plugins.compose).apply(false)
    alias(libs.plugins.compose.compiler).apply(false)
    alias(libs.plugins.buildConfig).apply(false)
    alias(libs.plugins.kotlinx.serialization).apply(false)
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.android.library) apply false
    alias(libs.plugins.org.jetbrains.kotlin.android) apply false
    alias(libs.plugins.jetbrainsKotlinJvm) apply false
}

buildscript {
    repositories {
        mavenCentral()
        google()
        gradlePluginPortal()
        maven { setUrl("https://jitpack.io") }
    }

    dependencies {

    }
}
