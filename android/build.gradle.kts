plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.org.jetbrains.kotlin.android)
    alias(libs.plugins.compose)
    alias(libs.plugins.compose.compiler)
}

android {
    namespace = "org.diary.sentilens"
    compileSdk = 34

    defaultConfig {
        minSdk = 26
        targetSdk = 34

        applicationId = "org.diary.sentilens"
        versionCode = 3
        versionName = "1.2.0"

        setProperty("archivesBaseName", "sentilens-$versionName")
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

    buildFeatures {
        compose = true
    }

    kotlinOptions {
//        freeCompilerArgs += listOf(
//            "-P",
//            "plugin:androidx.compose.compiler.plugins.kotlin:stabilityConfigurationPath=" +
//                    "${project.path}/compose_compiler_config.conf"
//        )
        freeCompilerArgs += listOf(
            "-P",
            "plugin:androidx.compose.compiler.plugins.kotlin:metricsDestination=" + project.buildDir.absolutePath + "/compose_metrics"
        )
        freeCompilerArgs += listOf(
            "-P",
            "plugin:androidx.compose.compiler.plugins.kotlin:reportsDestination=" + project.buildDir.absolutePath + "/compose_reports"
        )
    }


    kotlin {
        jvmToolchain(17)
    }
}


dependencies {

    implementation(libs.core.ktx)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.activityCompose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.ui)
    implementation(libs.androidx.ui.graphics)
    implementation(libs.androidx.ui.tooling.preview)
    implementation(libs.androidx.material3)
    implementation(libs.koin.android)
    implementation(libs.napier)
    implementation(libs.multiplatformSettings)

    implementation(libs.androidx.media3.session)
    implementation(libs.androidx.media3.exoplayer)

    implementation(project(":shared:composeMain"))
    implementation(project(":shared:core:composeUi"))
    implementation(project(":shared:feature:player"))

}
