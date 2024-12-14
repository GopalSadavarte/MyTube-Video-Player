<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="website icon" href={{asset('img/logo.png')}} type="image/x-icon">
        <!-- Scripts -->
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    </head>
    <body>
        @inertia
    </body>
</html>
