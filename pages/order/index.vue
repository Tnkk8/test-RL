<template>
    <div class="main-display">
        <div class="content">
            <v-row>
                <v-col>
                    <span class="header-menu">What drink ?</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="7">
                    <v-row class="my-2">
                        <v-col class="col-style" cols="3">
                            Category:
                        </v-col>
                        <v-col v-for="item of cate">
                            <Button :isActive="category == item.key" :items="item" :onClick="onSelectCate" />
                        </v-col>
                    </v-row>
                    <v-row v-if="category" class="my-2">
                        <v-col class="col-style" cols="3">
                            menu:
                        </v-col>
                        <v-col cols="3" v-if="category === 'coffee'" v-for=' item in coffeeMenu'>
                            <Button :isActive="menu == item.key" :items="item" :onClick="onSelectMenu" />
                        </v-col>
                        <v-col cols="3" v-if="category === 'tea'" v-for=' item in teaMenu'>
                            <Button :isActive="menu == item.key" :items="item" :onClick="onSelectMenu" />
                        </v-col>
                        <v-col cols="3" v-if="category === 'softDrink'" v-for=' item in softMenu'>
                            <Button :isActive="menu == item.key" :items="item" :onClick="onSelectMenu" />
                        </v-col>
                    </v-row>
                    <v-row v-if="menu" class="my-2">
                        <v-col class="col-style" cols="2">
                            attributes
                        </v-col>
                        <v-col cols="10" style="align-self: center">
                            <v-divider></v-divider>
                        </v-col>
                    </v-row>
                    <v-row v-if="menu">
                        <v-col>
                            <v-row v-if="category === 'coffee' || category === 'tea'" class="att-list">
                                <v-col cols="3">Type:</v-col>
                                <v-col cols="3" v-for="item in attType">
                                    <Button :isActive="type == item.key" :items="item" :onClick="onSelectAttributes"
                                        refs="attType" />
                                </v-col>
                            </v-row>
                            <v-row v-if="category === 'coffee' || category === 'tea'" class="att-list overflow">
                                <v-col cols="3">Sweetness:</v-col>
                                <v-col cols="3" v-for="item in attSweetness">
                                    <Button :isActive="sweetNess == item.key" :items="item" :onClick="onSelectAttributes"
                                        refs="sweetness" />
                                </v-col>
                            </v-row>
                            <v-row class="att-list">
                                <v-col cols="3">Options:</v-col>
                                <v-col cols="3" v-for="item in attOption">
                                    <Button :isActive="options.includes(item.key)" :items="item"
                                        :onClick="onSelectAttributes" refs="options" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="5">
                    <DisplaySection refs="displayMenuRef" :cate=category :menu="menu" :parent=this />
                </v-col>
            </v-row>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'OrderPage',
    middleware: 'defaultRedirect',
    data() {
        return {
            category: '',
            dataTest: 'True5555',
            type: null,
            sweetNess: null,
            options: [],
            cate: [
                { no: 1, name: 'Coffee', key: 'coffee' },
                { no: 2, name: 'Tea', key: 'tea' },
                { no: 3, name: 'Soft drink', key: 'softDrink' }],
            menu: '',
            order: [],
            coffeeMenu: [
                { no: 1, name: 'Americano', key: 'americano', price: 30 },
                { no: 3, name: 'Espresso', key: 'espresso', price: 25 },
                { no: 4, name: 'Latte', key: 'latte', price: 35 },
            ],
            teaMenu: [
                { no: 1, name: 'Taiwan Tea', key: 'taiwanTea', price: 35 },
                { no: 2, name: 'Thai Tea', key: 'thaiTea', price: 25 },
            ],
            softMenu: [
                { no: 1, name: 'Soda', key: 'soda', price: 15 },
                { no: 2, name: 'Cola', key: 'cola', price: 15 },
                { no: 3, name: 'Energy drink', key: 'energyDrink', price: 20 },
            ],
            attType: [
                { no: 1, name: 'Hot', key: 'hot', price: 0 },
                { no: 2, name: 'Cold', key: 'cold', price: 5 },
            ],
            attSweetness: [
                { no: 1, name: 'Less', key: 'lessSugar', price: 0 },
                { no: 2, name: 'Normal', key: 'normal', price: 0 },
                { no: 3, name: 'More', key: 'moreSugar', price: 0 },
            ],
            attOption: [
                { no: 1, name: 'Straw', key: 'straw', price: 0 },
                { no: 2, name: 'Cover', key: 'cupCover', price: 0 },
            ]

        }
    },

    methods: {
        onSelectCate(e) {
            if (this.category) {
                if (this.category === e.key) {
                    this.category = null
                    this.menu = null
                    this.type = null
                    this.sweetNess = null
                    this.options = []
                    this.order = { ...this.order, category: null }
                } else {
                    this.category = e.key
                    this.menu = null
                    this.type = null
                    this.sweetNess = null
                    this.options = []
                    this.order = { ...this.order, category: e.key }
                }
            } else {
                this.category = e.key
                this.menu = null
                this.type = null
                this.sweetNess = null
                this.options = []
                this.order = { ...this.order, category: e.key }
            }
            console.log('Order IS::', this.order);
        },
        onSelectMenu(e) {
            console.log('xxxxxx', e);
            if (this.menu) {
                if (this.menu === e.key) {
                    this.menu = null
                    this.order = { ...this.order, menu: null }
                } else {
                    this.menu = e.key
                    this.order = { ...this.order, menu: e.key }
                }
            } else {
                this.menu = e.key
                this.order = { ...this.order, menu: e.key }
            }
            console.log('Order IS::', this.order);
        },
        onSelectAttributes(e, refs) {
            console.log(e, 'refs:::', refs);
            if (refs === 'attType') {
                if (this.type) {
                    console.log('ref attType /// this.type');
                    if (this.type === e.key) {
                        this.type = null
                        this.order = { ...this.order, attributes: { type: null } }
                    } else {
                        this.type = e.key
                        this.order = { ...this.order, attributes: { type: e.key } }
                    }
                } else {
                    console.log('ref attType /// not.type');
                    this.type = e.key
                    this.order = { ...this.order, attributes: { type: e.key } }
                }
            } else if (refs === 'sweetness') {
                if (this.sweetNess) {
                    if (this.sweetNess === e.key) {
                        this.sweetNess = null
                        this.order = { ...this.order, attributes: { sweetNess: null } }
                    } else {
                        this.sweetNess = e.key
                        this.order = { ...this.order, attributes: { sweetNess: e.key } }
                    }
                } else {
                    this.sweetNess = e.key
                    this.order = { ...this.order, attributes: { sweetNess: e.key } }
                }
            } else if (refs === 'options') {
                console.log('thisOptions');
                if (this.options.some((el) => el == e.key)) {
                    console.log('xxx');
                    this.options = this.options.filter((el) => el !== e.key)
                } else {
                    this.options.push(e.key)
                }

                // this.options = [...new Set(this.options)]
                // if (this.options.length > 0) {
                //     console.log('มี option');
                // } else {
                //     console.log('ไม่มี option');

                //     // this.options = new Set(e.key)
                // }
                // if (e.key.includes(this.option)) {
                //     console.log('Key Include');
                //     this.options.push(e.key)
                // } else {
                //     console.log('Key Not Include');
                //     this.options.push(e.key)
                // }
                // if (this.option) {
                //     if (this.sweetNess === e.key) {
                //         this.option = null
                //         this.order = { ...this.order, attributes: { options: null } }
                //     } else {
                //         this.option = [...this.option, e.key]
                //         this.order = { ...this.order, attributes: { options: e.key } }
                //     }
                // } else {
                //     this.sweetNess = e.key
                //     this.order = { ...this.order, attributes: { sweetNess: e.key } }
                // }
            }
            console.log('Order:::', this.order);
            console.log('Optopns222', this.options);
        },
    },
}
</script>

<style lang="scss">
.main-display {
    color: red;
    width: 100%;

    .col-style {
        align-self: center;
        font-size: 28px;
    }

    .header {
        .header-menu {
            font-size: 32px;
        }
    }

    .att-list {
        align-items: center;
    }
}
</style>
  