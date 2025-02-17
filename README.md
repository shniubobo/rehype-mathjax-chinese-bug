# Steps to reproduce

## Can reproduce with `webpack`

```
pnpm clean
pnpm i
pnpm can-repro
```

Then open your browser, go to the website, and open the console. You should see some output containing an html snippet.

## Cannot reproduce with `tsc`

```
pnpm clean
pnpm i
pnpm cannot-repro
```

You should see an html snippet in your terminal.

## Diff

After formatting the output of the above two blocks of commands, we can get this diff:

```diff
--- cannot-repro.html
+++ can-repro.html
@@ -1,14 +1,14 @@
 <p>
   <mjx-container class="MathJax" jax="SVG"
     ><svg
-      style="vertical-align: -0.452ex"
       xmlns="http://www.w3.org/2000/svg"
-      width="18.226ex"
+      width="4.652ex"
       height="2.149ex"
       role="img"
       focusable="false"
-      viewBox="0 -750 8056 950"
+      viewBox="0 -750 2056 950"
       xmlns:xlink="http://www.w3.org/1999/xlink"
+      style="vertical-align: -0.452ex"
     >
       <defs>
         <path
@@ -38,17 +38,17 @@
             </text>
             <text
               data-variant="normal"
-              transform="translate(1000,0) scale(1,-1)"
+              transform="scale(1,-1)"
               font-size="884px"
               font-family="serif"
             >
               程
             </text>
           </g>
-          <g data-mml-node="mo" transform="translate(2277.8,0)">
+          <g data-mml-node="mo" transform="translate(277.8,0)">
             <use data-c="3D" xlink:href="#MJX-1-TEX-N-3D"></use>
           </g>
-          <g data-mml-node="mtext" transform="translate(3333.6,0)">
+          <g data-mml-node="mtext" transform="translate(1333.6,0)">
             <text
               data-variant="normal"
               transform="scale(1,-1)"
@@ -59,17 +59,17 @@
             </text>
             <text
               data-variant="normal"
-              transform="translate(1000,0) scale(1,-1)"
+              transform="scale(1,-1)"
               font-size="884px"
               font-family="serif"
             >
               度
             </text>
           </g>
-          <g data-mml-node="mo" transform="translate(5555.8,0)">
+          <g data-mml-node="mo" transform="translate(1555.8,0)">
             <use data-c="22C5" xlink:href="#MJX-1-TEX-N-22C5"></use>
           </g>
-          <g data-mml-node="mtext" transform="translate(6056,0)">
+          <g data-mml-node="mtext" transform="translate(2056,0)">
             <text
               data-variant="normal"
               transform="scale(1,-1)"
@@ -80,7 +80,7 @@
             </text>
             <text
               data-variant="normal"
-              transform="translate(1000,0) scale(1,-1)"
+              transform="scale(1,-1)"
               font-size="884px"
               font-family="serif"
             >
```
