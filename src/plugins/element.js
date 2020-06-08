import Vue from 'vue'
import { Button, Header, Main, Footer, Card, Form, FormItem, Input, Row, Col, Image, Container, Alert, InputNumber, Link, MessageBox, Message } from 'element-ui'

import BtnExit from '../components/tool/exitbtn.vue'
Vue.use(Button)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(Container)
Vue.use(Alert)
Vue.use(InputNumber)
Vue.use(Link)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox
Vue.component('btn-exit', BtnExit)
