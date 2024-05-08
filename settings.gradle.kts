rootProject.name = "Sentilens"

pluginManagement {
    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
    }
}

dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
    }
}

include(":shared:core:network")
include(":shared:core:database")
include(":shared:core:model")
include(":shared:core:data")
include(":shared:core:composeUi")
include(":shared:core:utils")
include(":shared:core:navigation")

include(":shared:feature:auth")
include(":shared:feature:diary")
include(":shared:feature:advice")
include(":shared:feature:stats")

include(":shared:composeMain")

//include(":android")
include(":android")
include(":desktop")
include(":web")
