package org.senti.lens.screens.commons.ui

import androidx.compose.animation.animateColorAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.ContentAlpha
import androidx.compose.material.LocalContentAlpha
import androidx.compose.material.MaterialTheme
import androidx.compose.material.minimumInteractiveComponentSize
import androidx.compose.material.ripple.rememberRipple
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.unit.dp
import org.senti.lens.bounceClick
import org.senti.lens.theme.defaultShape

@Composable
fun SecondaryIconButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
    enabled: Boolean = true,
    color: Color = MaterialTheme.colors.secondary,
    content: @Composable () -> Unit,
) {
    val interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
    Box(
        modifier = modifier
            .bounceClick()
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
    color: Color = MaterialTheme.colors.primary,
    content: @Composable () -> Unit,
) {
    val interactionSource: MutableInteractionSource = remember { MutableInteractionSource() }
    val animatedColor by animateColorAsState(if (enabled) color else Color.DarkGray)
    Box(
        modifier = modifier
            .bounceClick()
            .shadow(
                elevation = 4.dp,
                shape = defaultShape,
                spotColor = animatedColor,
            )
            .clip(defaultShape)
            .background(animatedColor)
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
    color: Color = MaterialTheme.colors.primary,
    shape: Shape = defaultShape,
    content: @Composable RowScope.() -> Unit,
) {
    val animatedColor by animateColorAsState(if (enabled) color else Color.DarkGray)

    Button(
        onClick = onClick,
        elevation = ButtonDefaults.elevation(5.dp),
        shape = shape,
        colors = ButtonDefaults.buttonColors(
            backgroundColor = animatedColor,
            disabledBackgroundColor = animatedColor
        ),
        modifier = modifier.bounceClick().defaultMinSize(minHeight = 48.dp).shadow(
            elevation = 7.dp,
            shape = defaultShape,
            spotColor = animatedColor,
        ),
        enabled = enabled,
        content = content
    )
}

@Composable
fun SecondaryButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
    enabled: Boolean = true,
    color: Color = MaterialTheme.colors.secondary,
    content: @Composable RowScope.() -> Unit,
) {
    Button(
        onClick = onClick,
        elevation = null,
        shape = defaultShape,
        colors = ButtonDefaults.buttonColors(backgroundColor = color),
        modifier = modifier.bounceClick().defaultMinSize(minHeight = 48.dp),
        enabled = enabled,
        content = content
    )
}

