<template >
    <div class="group shadow-card flex justify-between bg-white rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-300 mb-2">
        <div>
            {{ card.title }}
        </div>
        <div class="flex font-bold opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-500">
            <div class="text-gray-500 pr-2 hover:text-gray-600">Ed</div>
            <div
                @click='cardDelete'
                class="text-gray-500 hover:text-red-700"
            >Del</div>
        </div>
    </div>
</template>

<script>
import CardDelete from './../graphql/CardDelete.gql';
import { EVENT_CARD_DELETED } from './../constants';

export default {
    props: {
        card: Object
    },

    methods: {
        cardDelete() {
            const self = this;

            this.$apollo.mutate({
                mutation: CardDelete,
                variables: {
                    id: this.card.id
                },

                update(store, {data: {cardDelete}}) {
                    self.$emit('deleted', { 
                        store, 
                        data: cardDelete, 
                        type: EVENT_CARD_DELETED
                    });
                } 
            });
        }
    }
}
</script>
