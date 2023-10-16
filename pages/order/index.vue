<template>
    <div class="main-display">
        <div class="content">
            <v-row>
                <v-col>
                    <span style="font-size: 24px;" class="header-menu">Select your drink </span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="7">
                    <v-row class="my-2">
                        <v-col class="col-style" cols="3">
                            Category:
                        </v-col>
                        <v-col v-for="item of data" :key="item.id">
                            <Button type="defaultBtn" :isActive="category == item.name" :items="item"
                                :onClick="onSelectCate" />
                        </v-col>
                    </v-row>
                    <v-row v-if="category" class="my-2">
                        <v-col class="col-style" cols="3">
                            menu:
                        </v-col>
                        <v-col cols="3" v-for=' item in categoryFilter.menus' :key="item.id">
                            <Button type="defaultBtn" :isActive="menu == item.key" :items="item" :onClick="onSelectMenu" />
                        </v-col>
                    </v-row>
                    <v-row v-if="menu" class="my-2">
                        <v-col class="col-style" cols="3">
                            attributes
                        </v-col>
                        <v-col cols="9" style="align-self: center">
                            <v-divider></v-divider>
                        </v-col>
                        <v-col>
                            <v-row v-if="attType.length > 0" class="att-list">
                                <v-col cols="3" style="font-size: 22px;">Type:</v-col>
                                <v-col cols="3" v-for="item in attType" :key="item.id">
                                    <Button type="defaultBtn" :isActive="type == item.name" :items="item"
                                        :onClick="onSelectAttributes" refs="attType" />
                                </v-col>
                            </v-row>
                            <v-row v-if="attSweetness.length > 0" class="att-list">
                                <v-col cols="3" style="font-size: 22px;">sweetness:</v-col>
                                <v-col cols="3" v-for="item in attSweetness" :key="item.id">
                                    <Button type="defaultBtn" :isActive="sweetNess == item.name" :items="item"
                                        :onClick="onSelectAttributes" refs="sweetness" />
                                </v-col>
                            </v-row>
                            <v-row v-if="attOption.length > 0" class="att-list">
                                <v-col cols="3" style="font-size: 22px;">options:</v-col>
                                <v-col cols="3" v-for="item in attOption" :key="item.id">
                                    <Button type="defaultBtn" :isActive="options.includes(item.name)" :items="item"
                                        :onClick="onSelectAttributes" refs="options" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="5">
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
            attributeList: [],
            category: '',
            data: [],
            categoryFilter: null,
            type: null,
            sweetNess: null,
            options: [],
            sumPrice: 0,
            menu: '',
            order: null,
            attType: [],
            attSweetness: [],
            attOption: []
        }
    },
    async mounted() {
        await this.fetchData()
    },
    methods: {
        async fetchData() {
            try {
                const res = await this.$axios.get('/category');
                if (res.status === 200) {
                    this.data = res.data
                    this.data.forEach(e => {
                        if (e.attributes && e.attributes.length > 0) {
                            this.attributeList.push(...e.attributes)
                        }

                    });
                    this.attributeList = this.attributeList.map((item) => { return { ...item.attribute, cate_id: item.cate_id } })
                }
            } catch (error) {
                console.error(error);
            }
        },
        onSelectCate(item) {
            if (this.category === item.name) {
                this.category = null
                this.menu = null
                this.type = null
                this.sweetNess = null
                this.options = []
                this.order = { ...this.order, category: null }
                this.categoryFilter = null
            } else {
                this.category = item.name
                this.menu = null
                this.type = null
                this.sweetNess = null
                this.options = []
                this.order = { ...this.order, category: item.name }
                let dfs = this.data.filter(e => e.name === item.name)
                this.categoryFilter = dfs[0]
            }
            this.attType = this.attributeList.filter((e) => e.type === 'type' && e.cate_id === item.id)
            this.attSweetness = this.attributeList.filter((e) => e.type === 'sweetness' && e.cate_id === item.id)
            this.attOption = this.attributeList.filter((e) => e.type === 'options' && e.cate_id === item.id)
        },
        onSelectMenu(item) {
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
            this.calcPrice()
        },
        onSelectAttributes(item, refs) {
            switch (refs) {
                case 'attType': {
                    if (this.type === item.name) {
                        this.type = null
                        this.order = { ...this.order, attType: null }
                    } else {
                        this.type = item.name
                        this.order = { ...this.order, attType: item }
                    }
                    break;
                }
                case 'sweetness': {
                    if (this.sweetNess === item.name) {
                        this.sweetNess = null
                        this.order = { ...this.order, sweetNess: null }
                    } else {
                        this.sweetNess = item.name
                        this.order = { ...this.order, sweetNess: item.name }
                    }
                    break;
                }
                case 'options': {
                    if (this.options.some((e) => e == item.name)) {
                        let _options = this.options.filter((e) => e !== item.name)
                        this.options = _options
                        this.order = { ...this.order, options: _options }
                    } else {
                        this.options.push(item.name)
                        this.order = { ...this.order, options: this.options }
                    }
                    break;
                }
            }
            this.calcPrice()
        },
        calcPrice() {
            let result = 0
            if (this.order.menu) {
                result = result + this.order.menu.price
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
  