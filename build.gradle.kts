plugins {
    alias(libs.plugins.multiplatform).apply(false)
    alias(libs.plugins.compose).apply(false)
    alias(libs.plugins.android.application).apply(false)
    alias(libs.plugins.libres).apply(false)
    alias(libs.plugins.buildConfig).apply(false)
    alias(libs.plugins.kotlinx.serialization).apply(false)
    alias(libs.plugins.sqlDelight).apply(false)
}

buildscript {
    repositories {
        mavenCentral()
        google()
        gradlePluginPortal()
    }

    val sqlDelightVersion = "1.5.5"
    dependencies {
        classpath(libs.mokoResourcesGeneratorGradle)
        classpath(libs.sqldelight.gradle.plugin)
    }
}
