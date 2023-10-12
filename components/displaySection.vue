<template>
    <div>
        <div class="display">
            <v-row style="margin-top: 3px;">
                <v-col cols="2">
                    Order :
                </v-col>
                <v-col style="color: black;font-size: 20px;">
                    {{ cate }}
                </v-col>
            </v-row>
            <v-row v-if="menu" style="margin-top: 3px;">
                <v-col cols="2">
                    Menu :
                </v-col>
                <v-col style="color: black;font-size: 20px;">
                    {{ menu }}
                </v-col>
            </v-row>
            <v-row v-if="menu" style="margin-top: 3px;">
                <v-col cols="4">
                    attributes 
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    type :
                </v-col>
                <v-col style="color: black;font-size: 20px;margin-top: 10px;">
                    <v-row>
                        {{ menu }}
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    sweet :
                </v-col>
                <v-col style="color: black;font-size: 20px;margin-top: 10px;">
                    <v-row>
                        {{ menu }}
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    option :
                </v-col>
                <v-col style="color: black;font-size: 20px;margin-top: 10px;">
                    <v-row>
                        {{ menu }}
                    </v-row>
                </v-col>
            </v-row>
            <Footer />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        cate: { type: String },
        order: { type: Array },
        parent: { type: Object, default: {} },
        menu: { type: String }
    },
    data() {
        return {
            data: []
        }
    }
}
</script>
<style lang="scss" scoped>
.display {
    background-color: green;
    position: relative;
    width: 100%;
    height: 350px;
    padding: 10px;
    margin-top: 20px;
    color: white;
    border-style: solid;
    border-color: rosybrown;
    border-width: 8px;
    border-radius: 8px;

    .header {
        font-size: 20px;
    }

    // .footer {
    //     // position: fixed;
    //     // bottom: 0;
    //     margin-top: auto;
    //     width: 100%;
    //     background-color: #f0f0f0;
    //     /* Optional background color */
    //     padding: 10px;
    //     /* Optional padding for the text container */
    // }
}
</style>