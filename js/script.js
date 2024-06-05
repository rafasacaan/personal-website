(function () {
    const annotate = RoughNotation.annotate;
    const annotationGroup = RoughNotation.annotationGroup;
    const $ = (t) => document.querySelector(t) || 0;
    
    {
        // Run for words in index.html
        const a0 = annotate($('#datascience'), { type: "highlight", color: getRandomColor() });
        const a1 = annotate($('#experimenting'), { type: "highlight", color: getRandomColor() });
        const a2 = annotate($('#recording'), { type: "highlight", color: getRandomColor() });
        const un = annotate($('.underline_'), { type: "underline", color: getRandomColor() });

        
        // Run for each element with class "underline_"
        const processElementsWithClass = (className, callback) => {
            document.querySelectorAll(`.${className}`).forEach(callback);
        };
        
        processElementsWithClass('underline_', (element) => {
            const un = annotate(element, { type: "underline", color: getRandomColor() });
            un.show();
        });

        a0.show();
        a1.show();
        a2.show();
        
    }
    
  })();

function getRandomColor() {
    let r, g, b;

    function calculateBrightness(r, g, b) {
        return 0.299 * r + 0.587 * g + 0.114 * b;
    }

    do {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    } while (calculateBrightness(r, g, b) < 128); // Ensure brightness is above the threshold

    // Combine the components into an RGB string
    const color = `rgb(${r}, ${g}, ${b})`;

    return color;
}