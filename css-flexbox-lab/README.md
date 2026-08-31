# Flexbox / CSS Grid - Lab

<img src="https://i.imgur.com/qsSi07H.png">

#### Intro

Time for some practice laying out elements using Flexbox and CSS Grid. This lab is hands-on: you'll be reproducing a real layout rather than following step-by-step instructions.

#### Exercise

<img src="https://i.imgur.com/N4RdHqp.jpg">

Choose either the vertical or horizontal profile card shown above and reproduce it using HTML and CSS. Use a combination of Flexbox and CSS Grid to lay out the individual elements as close to the original as you can, it does not have to be pixel perfect.

#### Hints

A few pointers to save you some trial and error along the way.

Start with a bit of CSS reset:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Helvetica;
}
```

Use the Digital Color Meter application that comes with the Mac to pick the colors straight from the screen, rather than guessing at hex values.

Elements can be made to appear circular by using `border-radius: 50%;`.

For the rating scale with the stars, feel free to use this image tag:

```html
<img src="https://i.imgur.com/iUpkmhs.png" />
```

You can ignore the phone and conversation icons, just set the background colors of the box instead of trying to recreate the icons themselves.

#### Bonus

As a bonus, reproduce both the vertical and horizontal versions.