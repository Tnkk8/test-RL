<template>
    <div class="display">
        <v-row v-if="cate">
            <v-col cols="6">
                <v-row class="mt-10" style="justify-content: center;">
                    <v-avatar v-if="cate === 'coffee'" class="avatar-img px-0" style="border-radius: 0;" width="150"
                        height="150">
                        <img src="../assets/img/coffee-cup-2.svg" alt="logo">
                    </v-avatar>
                    <!-- <v-avatar v-if="cate === 'coffee'" class="avatar-img px-0" style="border-radius: 0;" width="150"
                        height="150">
                        <img src="../assets/img/coffee-cup-2.svg" alt="logo">
                    </v-avatar> -->
                    <!-- <v-avatar v-if="cate === 'tea'" class="avatar-img px-0" style="border-radius: 0;" width="150"
                        height="150">
                        <img src="../assets/img/ice-tea.png" alt="logo">
                    </v-avatar>
                    <v-avatar v-if="cate === 'softdrink'" class="avatar-img px-0" style="border-radius: 0;" width="150"
                        height="150">
                        <img src="../assets/img/soft-drink.png" alt="logo">
                    </v-avatar> -->
                </v-row>
            </v-col>
            <v-col class="mt-4" cols="6">
                <v-row v-if="cate">
                    <v-col cols="12" class="pa-0 pt-1 col-value" style="font-size: 26px;">{{ cate }}</v-col>
                    <v-col class="pa-1" cols="4">menu :</v-col>
                    <v-col class="pa-0 pt-1 col-value">{{ menu }}</v-col>
                </v-row>
                <v-row v-if="menu">
                    <v-col v-if="type" class="pa-1" cols="4">type :</v-col>
                    <v-col class="pa-1 pt-1 col-value">{{ type }}
                        <span v-if="type === 'Cold'" style="margin-left: 5px;color: red;">+ 5
                            <v-avatar class="avatar-img px-0" style="min-width: 20px;" width="15" height="15">
                                <img src="../assets/img/coin.svg" alt="logo">
                            </v-avatar>
                        </span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-if="sweetNess" class="pa-1 " cols="4">sweet:</v-col>
                    <v-col class="pa-1 pt-1 col-value">{{ sweetNess }}</v-col>
                </v-row>
                <v-row v-if="options.length > 0">
                    <v-col class="pa-1 " cols="4">options:</v-col>
                    <v-col class="pa-1 pt-1 col-value">{{ options.length > 0 ? options.join(',') : '' }}</v-col>
                    <v-col cols="12" style="align-self: center">
                        <v-divider color="red"></v-divider>
                    </v-col>
                </v-row>
                <v-row v-if="isShow()">
                    <v-col class="pa-1" cols="4">Total:</v-col>
                    <v-col class="pa-0 col-value" style="margin-top: -10px;">
                        <span style="color: red;font-size: 36px;">{{
                            total }}
                            <b style="color: black;font-size: 26px;">฿</b>
                        </span>
                    </v-col>
                    <v-col cols="12" style="align-self: center;margin: 0;padding: 0;">
                        <v-divider color="red"></v-divider><v-divider color="red"></v-divider>
                    </v-col>
                </v-row>
                <v-row v-if="cate === 'softDrink' && options.length > 0">
                    <v-col class="pa-1" cols="4">Total:</v-col>
                    <v-col class="pa-0 col-value">
                        <span style="color: red;font-size: 36px;">{{ total }}
                        </span>฿
                    </v-col>
                    <v-col cols="12" style="align-self: center;margin: 0;padding: 0;">
                        <v-divider color="red"></v-divider>
                        <v-divider color="red"></v-divider>
                    </v-col>
                    <!-- <v-col cols="12" style="align-self: center;margin: 0;margin-top:2px;padding: 0;">
                        <v-divider color="red"></v-divider>
                    </v-col> -->
                </v-row>
            </v-col>
            <Button class="footer-btn" v-if="isShow()" type="submitBtn" :items="footerBtn" />
        </v-row>
        <v-row v-else>
            <v-col cols="12" style="font-size: 32px;">
                select your drink . . .</v-col>
        </v-row>

    </div>
</template>
<script>
export default {
    props: {
        order: { type: Array },
        cate: { type: String },
        menu: { type: String },
        type: { type: String },
        sweetNess: { type: String },
        options: { type: Array },
        total: { type: Number }

    },
    data() {
        return {
            data: [],
            footerBtn: { name: 'Order Now !' },
        }
    },
    methods: {
        splitOption(item) {

        },
        isShow() {
            if (this.cate === 'softdrink') {
                return this.menu && this.options.length > 0
            } else {
                return this.menu && this.type && this.sweetNess && this.options.length > 0
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.display {
    background-color: green;
    position: relative;
    width: 100%;
    height: 380px;
    padding: 13px;
    margin-top: 20px;
    color: white;
    border-style: solid;
    border-color: rosybrown;
    border-width: 8px;
    border-radius: 8px;

    .header {
        font-size: 20px;
    }
    .col-value {
        color: black;
        font-size: 18px;
    }

    .footer-btn {
        bottom: 0;
        color: red;
        font-size: 20px;
        margin-bottom: 15px;
        position: absolute;
        text-align: center;
        width: 100%;
    }
}
</style>