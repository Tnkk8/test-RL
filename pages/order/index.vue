<template>
    <div class="main-display">
        <div class="content">
            <v-row>
                <v-col>
                    <span style="font-size: 24px;" class="header-menu">Select your drink </span>
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
                        <v-col class="col-style" cols="3">
                            attributes
                        </v-col>
                        <v-col cols="9" style="align-self: center">
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
                    <DisplaySection refs="displayMenuRef" :cate=category :menu="menu" :type=type :options=options
                        :sweetNess=sweetNess :total=sumPrice />
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
            sumPrice: 0,
            cate: [
                { no: 1, name: 'Coffee', key: 'coffee' },
                { no: 2, name: 'Tea', key: 'tea' },
                { no: 3, name: 'Soft drink', key: 'softDrink' }],
            menu: '',
            order: null,
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

        },
        onSelectMenu(item) {
            if (this.menu) {
                if (this.menu === item.key) {
                    this.menu = null
                    this.type = null
                    this.sweetNess = null
                    this.options = []
                    this.order = { ...this.order, menu: null }
                } else {
                    this.menu = item.key
                    this.order = { ...this.order, menu: item }
                }
            } else {
                this.menu = item.key
                this.order = { ...this.order, menu: item }
            }

            this.calcPrice()
        },
        onSelectAttributes(item, refs) {

            if (refs === 'attType') {
                if (this.type) {

                    if (this.type === item.key) {
                        this.type = null
                        this.order = { ...this.order, attType: null }
                    } else {
                        this.type = item.key
                        this.order = { ...this.order, attType: item }
                    }
                } else {

                    this.type = item.key
                    this.order = { ...this.order, attType: item }
                }
            } else if (refs === 'sweetness') {
                if (this.sweetNess) {
                    if (this.sweetNess === item.key) {
                        this.sweetNess = null
                        this.order = { ...this.order, sweetNess: null }
                    } else {
                        this.sweetNess = item.key
                        this.order = { ...this.order, sweetNess: item.key }
                    }
                } else {
                    this.sweetNess = item.key
                    this.order = { ...this.order, sweetNess: item.key }
                }
            } else if (refs === 'options') {

                if (this.options.some((e) => e == item.key)) {
                    let _options = this.options.filter((e) => e !== item.key)
                    this.options = _options
                    this.order = { ...this.order, options: _options }
                } else {
                    this.options.push(item.key)
                    this.order = { ...this.order, options: this.options }
                }
            }
            this.calcPrice()
        },
        calcPrice() {
            let result = 0
            if (this.order.menu) {
                result = result + this.order.menu.price
            } else if (this.order.menu === null) {
                result = 0
            }
            if (this.order.attType) {
                result = result + this.order.attType.price
            }
            this.sumPrice = result
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
  