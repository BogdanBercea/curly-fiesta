<template>
    <div>
        <textarea 
            class="rounded-md shadow-card py-1 px-2 outline-none w-full text-gray-900 text-sm bg-white h-16 resize-none"
            placeholder="Enter a title for this card"
            :value="value"
            ref="card"
            @keyup.esc="closed"
            @keyup.enter="saved"
            @input="$emit('input', $event.target.value)"
        ></textarea>

        <div class="flex">
            <button 
                @click="saved"
                class="rounded-md py-1 px-3 bg-indigo-700 text-white cursor-pointer hover:bg-purple-600 outline-none"
            >Add Card</button>
            <button
                @click="closed" 
                class="py-1 px-3 ml-1 rounded-md hover:bg-gray-500 cursor-pointer text-gray-600"
            >Cancel</button>
        </div>
    </div>
</template>

<script>
export default {

    props: [ "value" ],
    
    data() {
        return { }
    },

    mounted() {
        this.$refs.card.focus();
    },

    methods: {
        closed() {
            this.$emit('closed');
        },

        saved() {
            this.$emit('saved');
        }
    }
}
</script>