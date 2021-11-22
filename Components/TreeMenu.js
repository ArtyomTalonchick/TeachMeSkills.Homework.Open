class TreeMenu extends HTMLElement {
    connectedCallback() {
        this.initShadow();
        this.addEventsListener();
    }


    disconnectedCallback() {
        this.removeEventsListener();
    }

    initShadow = () => {
        this.attachShadow({mode: "open"});
        const tmpl = document.getElementById("tmpl__tree-menu");
        this.shadowRoot.append(tmpl.content.cloneNode(true));
    }

    addEventsListener = () => {
        this.shadowRoot.querySelector(`slot[name="title"]`)
            .addEventListener("click", this.handleToggleMenu);
        this.shadowRoot.querySelector(`slot[name="item"]:not(tree-menu)`)
            .addEventListener("click", this.handleSelectItem);
    }

    removeEventsListener = () => {
        this.shadowRoot.querySelector(`slot[name="title"]`)
            .removeEventListener("click", this.handleToggleMenu);
    }

    handleToggleMenu = () => {
        this.shadowRoot.querySelector(`slot[name="item"]`).classList.toggle("show");
    }

    handleSelectItem = (e) => {
        if (e.target.getAttribute("slot") !== "title") {
            e.stopPropagation();
            this.dispatchEvent(new CustomEvent("select", {
                bubbles: true,
                composed: true,
                detail: e.target
            }));
        }
    }
}
  
export { TreeMenu };