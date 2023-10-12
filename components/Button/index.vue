<template>
    <div>
        <v-btn class="my-button" :class="isActive && 'active'" width="100px" @click="onClick(items, refs)">
            {{ items?.name }}
            <v-avatar class="avatar-img" v-if="items.key === 'hot'" width="20" height="30">
                <img src="../../assets/img/hot_icon.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.key === 'cold'" width="20" height="30">
                <img src="../../assets/img/cold_icon.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.key === 'straw'" width="30" height="30">
                <img src="../../assets/img/straw.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.key === 'cupCover'" width="30" height="30">
                <img src="../../assets/img/beer-cap.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.key === 'lessSugar'" width="30" height="30">
                <img src="../../assets/img/sugar-free.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.key === 'normal'" width="30" height="30">
                <img src="../../assets/img/sugar.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.key === 'moreSugar'" width="30" height="30">
                <img src="../../assets/img/sugar-more.svg" alt="logo">
            </v-avatar>
            <!-- <v-icon v-if="items.key === 'cold'">
                mdi-delete-variant
            </v-icon> -->


        </v-btn>
    </div>
</template>
<script>
export default {
    name: 'Button',
    props: {
        label: { type: String },
        items: { type: Object },
        parent: { type: Object },
        onClick: { type: Function },
        isActive: { type: Boolean },
        refs: { type: String }
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.my-button {
    border-radius: 13px;
    box-shadow: 0px 0px 3px 5px #888888;

    &.active {
        color: red;
        box-shadow: 0px 3px 1px 3px #888888;
    }

    .avatar-img {
        justify-content: end;
    }
}
</style>