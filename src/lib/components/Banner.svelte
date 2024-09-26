<script>
    import { Button } from "flowbite-svelte";
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-4 mb-8 mr-4 ml-4">
    <div class="col-span-1">1</div>
    <div class="col-span-1">2</div>
    <div class="col-span-1">3</div>
    <div class="col-span-1 md:justify-self-end invisible md:visible text-xs">
        <div
            class="grid grid-rows-3 gap-4 md:grid-rows-3 xl:grid-cols-3 justify-items-center"
        >
            <div class="col-span-1">
                <Button>
                    <span>Phone</span>
                </Button>
            </div>
            <div class="col-span-1">
                <Button>
                    <span>Email</span>
                </Button>
            </div>
            <div id="button_important" class="col-span-1">
                <Button>
                    <span>Message</span>
                </Button>
            </div>
        </div>
    </div>
</div>
<style>
    #button_important {
        background-color: bisque;
    }

    #button_important:hover {
        padding: 4px;
        background-color: brown;
        border-radius: 50%;
        transition-duration: 4ms;
    }
</style>