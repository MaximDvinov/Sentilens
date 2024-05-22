import org.jetbrains.compose.desktop.application.dsl.TargetFormat

plugins {
    kotlin("jvm")
    alias(libs.plugins.compose)
    alias(libs.plugins.compose.compiler)
}

group = "org.diary"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
    google()
}

dependencies {
    implementation(compose.desktop.currentOs)
    implementation(compose.components.resources)
    implementation(libs.composeIcons.fontAwesome)

    implementation(libs.koin.core)
    implementation(libs.napier)
    implementation(libs.multiplatformSettings)

    implementation(project(":shared:composeMain"))
    implementation(project(":shared:core:composeUi"))
}

compose.desktop {
    application {
        mainClass = "MainKt"

        nativeDistributions {
            targetFormats(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
            packageName = "sentilens"
            packageVersion = "1.0.0"
        }
    }
}
