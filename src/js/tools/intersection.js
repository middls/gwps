import Plugin from "@/js/core/Plugin";
import init from "@/js/core/init";

class Intersection extends Plugin {
    defaults() {
        return {
            intersection: `[data-aos]`,
            setting: {
                threshold: [1],
            }
        };
    }

    init() {

        for (let elm of this.elements) {
            this.observer.observe(elm);
        }
    }

    buildCache() {

        this.elements = this.element.querySelectorAll(this.options.intersection);
        this.observer = new IntersectionObserver(this.onEntry, this.options.setting);
    }

    bindEvents() {
    }

    onEntry(entry) {
        // entry.forEach((change) => {
        //     if (change.isIntersecting) {
        //         change.target.classList.add('visible');
        //     }
        // });
    }
}

export default init(Intersection, "intersection");
