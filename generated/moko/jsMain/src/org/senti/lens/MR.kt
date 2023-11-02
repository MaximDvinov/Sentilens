package org.senti.lens

import dev.icerock.moko.graphics.Color
import dev.icerock.moko.resources.AssetResource
import dev.icerock.moko.resources.ColorResource
import dev.icerock.moko.resources.FileResource
import dev.icerock.moko.resources.FontResource
import dev.icerock.moko.resources.ImageResource
import dev.icerock.moko.resources.PluralsResource
import dev.icerock.moko.resources.ResourceContainer
import dev.icerock.moko.resources.StringResource
import kotlin.String
import kotlin.collections.List

public actual object MR {
  private val contentHash: String = "8fb7385798355183c490a4a91fb5577e"

  public actual object strings : ResourceContainer<StringResource> {
    override fun values(): List<StringResource> = listOf()
  }

  public actual object plurals : ResourceContainer<PluralsResource> {
    override fun values(): List<PluralsResource> = listOf()
  }

  public actual object images : ResourceContainer<ImageResource> {
    public actual val icon: ImageResource = ImageResource(fileUrl =
        js("require(\"images/icon.png\")") as String, fileName = "icon.png")

    public actual val icon_bg: ImageResource = ImageResource(fileUrl =
        js("require(\"images/icon_bg.png\")") as String, fileName = "icon_bg.png")

    override fun values(): List<ImageResource> = listOf(icon, icon_bg)
  }

  public actual object fonts : ResourceContainer<FontResource> {
    override fun values(): List<FontResource> = listOf(Nunito.medium, Nunito.semiBold, Nunito.bold)

    public fun addFontsToPage() {
      js("require(\"fonts/orgsentilens-generated-declarations.css\")")
    }

    public actual object Nunito {
      public actual val bold: FontResource = FontResource(fileUrl =
          js("require(\"fonts/Nunito-Bold.ttf\")") as String, fontFamily = "Nunito-Bold")

      public actual val medium: FontResource = FontResource(fileUrl =
          js("require(\"fonts/Nunito-Medium.ttf\")") as String, fontFamily = "Nunito-Medium")

      public actual val semiBold: FontResource = FontResource(fileUrl =
          js("require(\"fonts/Nunito-SemiBold.ttf\")") as String, fontFamily = "Nunito-SemiBold")
    }
  }

  public actual object files : ResourceContainer<FileResource> {
    override fun values(): List<FileResource> = listOf()
  }

  public actual object colors : ResourceContainer<ColorResource> {
    override fun values(): List<ColorResource> = listOf()
  }

  public actual object assets : ResourceContainer<AssetResource> {
    override fun values(): List<AssetResource> = listOf()
  }
}
