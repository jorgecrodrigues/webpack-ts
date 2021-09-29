(function (window: Window) {
    window.addEventListener("load", (event: Event) => {
        const time  = new Date().getTime()
        document.body.setAttribute("data-load", time.toString())
        document.body?.classList?.add?.("loaded")
    })
    window.document.addEventListener("click", (event: PointerEvent) => {
        console.log(event)
    })
}(window));