<script lang="ts">

    import { GenerateMessage } from "$lib/generateMessage";
    import { ProgressBar } from "@skeletonlabs/skeleton";

    interface Message {
        content: string,
        role: "cat" | "user" | "system"
    }

    let loading = false;

let elemChat: HTMLElement;
let messageFeed: Message[] = [
    {content: "Ask Catbot a question!", role: "system"},
];
let currentMessage = '';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function scrollChatBottom(behavior?: ScrollBehavior): void {
    setTimeout(function() {
	    elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
    }, 200)
}

async function SendMessage() {
    messageFeed = [...messageFeed, {role: "user", content: currentMessage}];
    currentMessage = "";
    scrollChatBottom("smooth")
    currentMessage = "";
    let new_message = GenerateMessage()
    let counter = 0
    while (counter < new_message.length) {
        if (counter > 0) {
            await timeout(Math.random() * 200)
            messageFeed.pop()
            messageFeed = [...messageFeed, {role: "cat", content: new_message.slice(0, counter)}]
        } else {
            await timeout(Math.random() * 300)
            messageFeed = [...messageFeed, {role: "cat", content: new_message.slice(0, counter)}]
        }
        scrollChatBottom("smooth")
        counter += Math.ceil(Math.random() * 3)
        messageFeed.pop()
        messageFeed = [...messageFeed, {role: "cat", content: new_message.slice(0, counter)}]
    }
}

				

</script>



<div class="container h-full mx-auto flex flex-col items-center gap-4" style="max-width: 70vw">


<div bind:this={elemChat} class="card py-5 px-14 overflow-y-auto bg-white w-full" style="max-height: 50vh; min-height: 100px;">

    <div class="grid grid-cols-5 gap-2">

    {#each messageFeed as message}
        {#if message.role == "cat"}

                <div class="card p-4 col-span-4 rounded-tl-none space-y-2">
                    <header class="flex justify-between items-center">
                        <p class="font-bold">AI Catbot</p>
                        <!-- <small class="opacity-50">{new Date()}</small> -->
                    </header>
                    <p>{message.content}</p>
                </div>
                <div class="col-span-1"></div>
		{:else if message.role == "user"}
                <div class="col-span-1"></div>
                <div class="card p-4 rounded-tr-none variant-soft col-span-4 space-y-2">
                    <header class="flex justify-between items-center">
                        <p class="font-bold">You</p>
                        <!-- <small class="opacity-50">{new Date()}</small> -->
                    </header>
                    <p>{message.content}</p>
                </div>
		{:else if message.role == "system"}
                <div class="rounded-none col-span-5 space-y-2">
                        <!-- <small class="opacity-50">{new Date()}</small> -->
                        <p>{message.content}</p>
                </div>
                                
        {/if}
    {/each}
    {#if loading}
        <ProgressBar class="col-span-5 my-2" />

    {/if}
    </div>

</div>

<button class="btn btn-icon relative inset-x-1/2 -inset-y-14" style="margin-right: 35px; margin-bottom: -55px;" on:click={() => scrollChatBottom("smooth")}><span class="material-symbols-outlined">
    arrow_cool_down
    </span></button>


                                    
    
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
	<button class="input-group-shim" disabled>🐈‍⬛</button>
	<input type="text"
		bind:value={currentMessage}
        on:keydown={(e) => (e.code == "Enter") ? SendMessage() : null}
		class="bg-transparent border-0 ring-0"
		name="prompt"
		id="prompt"
		placeholder="Write a message..."
        autocomplete="off"
	/>
	<button class="variant-filled-primary" on:click={SendMessage}>Send</button>
</div>
					       

</div>
