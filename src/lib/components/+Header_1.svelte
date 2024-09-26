<div id="navbar" class="sticky wrap flex flex-grid w-screen p-4">
    <div class="">
        <!-- <img class="flex w-50 h-50" src="assets/images/logo.jpg" alt="logo"> -->
    </div>
    <div class="">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/products2">Products</a>
        <a href="/products3">Products</a>
    </div>
</div>

<style>

    #navbar {
        backdrop-filter: blur(30px);
        box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
        border: 2px solid rgba(255, 255, 255, 0.18)
    }
    .wrap {
        display: grid;
        & > * {
            grid-column: 1;
            grid-row: 1;
        }
    }
</style>
