import m from 'mithril'

export default class Loader {
    view(vnode) {
        return vnode.attrs.loading ? <p>loading...</p> : null
    }
}
