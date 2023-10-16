<template>
    <div>
        <v-btn v-if="type === 'defaultBtn'" class="default-button" :class="isActive && 'active'" width="130px"
            @click="onClick(items, refs)">
            {{ items?.name }}
            <v-avatar class="avatar-img" v-if="items.name === 'Hot'" width="20" height="30">
                <img src="../../assets/img/hot_icon.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'Cold'" width="20" height="30">
                <img src="../../assets/img/cold_icon.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'Straw'" width="30" height="30">
                <img src="../../assets/img/straw.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'Cup Cover'" width="30" height="30">
                <img src="../../assets/img/beer-cap.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'Less'" width="30" height="30">
                <img src="../../assets/img/sugar-free.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'Normal'" width="30" height="30">
                <img src="../../assets/img/sugar.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'More'" width="30" height="30">
                <img src="../../assets/img/sugar-more.svg" alt="logo">
            </v-avatar>
            <!-- <v-icon v-if="items.name === 'cold'">
                mdi-delete-variant
            </v-icon> -->
        </v-btn>
        <v-btn v-if="type === 'submitBtn'" class="submit-button" :class="isActive && 'active'" width="130px"
            color="#5D4037">
            {{ items?.name }}
            <v-avatar class="avatar-img" v-if="items.name === 'Hot'" width="20" height="30">
                <img src="../../assets/img/hot_icon.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'Cold'" width="20" height="30">
                <img src="../../assets/img/cold_icon.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'Straw'" width="30" height="30">
                <img src="../../assets/img/straw.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'Cup Cover'" width="30" height="30">
                <img src="../../assets/img/beer-cap.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'Less'" width="30" height="30">
                <img src="../../assets/img/sugar-free.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'Normal'" width="30" height="30">
                <img src="../../assets/img/sugar.svg" alt="logo">
            </v-avatar>
            <v-avatar class="avatar-img" v-if="items.name === 'More'" width="30" height="30">
                <img src="../../assets/img/sugar-more.svg" alt="logo">
            </v-avatar>
            <!-- <v-icon v-if="items.name === 'cold'">
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
        refs: { type: String },
        type: { type: String }
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.default-button {
    border-radius: 13px;
    box-shadow: 0px 0px 3px 5px #888888;

    &.active {
        color: red;
        box-shadow: 0px 3px 1px 3px #FFAB00;
    }

    .avatar-img {
        justify-content: end;
    }
}

.submit-button {
    border-radius: 13px;
    box-shadow: 0px 0px 3px 5px #FFAB00;
    background-color: red;
    color: white;
    font-size: 20px;
    padding: 2px;
}
</style>