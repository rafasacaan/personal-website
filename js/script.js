(function () {
    const annotate = RoughNotation.annotate;
    const annotationGroup = RoughNotation.annotationGroup;
    const $ = (t) => document.querySelector(t);
    
    {
        const a0 = annotate($('#datascience'), { type: "highlight", color: "pink" });
        const a1 = annotate($('#experimenting'), { type: "highlight", color: "coral" });
        const a2 = annotate($('#recording'), { type: "highlight", color: "DeepPink" });

        a0.show();
        a1.show();
        a2.show();
    }
    

  })();
