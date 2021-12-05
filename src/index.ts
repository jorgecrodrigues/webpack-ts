interface TreeNode {
    title: number;
    children?: TreeNode[];
}

(function (window: Window) {
    window.addEventListener("load", (event: Event) => {
        console.log(event);
        
        const time = new Date().getTime()
        document.body.setAttribute("data-load", time.toString());
        document.body?.classList?.add?.("loaded");
    });

    const mapRecursive = (root: TreeNode[], fn: any) => {
        return root.map((node: TreeNode) => {
            // Copy object
            const objCopy = { ...node }
            // Has children
            if (objCopy?.children) objCopy.children = mapRecursive(node.children, fn);
            return { ...objCopy, title: fn(node.title) };
        });
    }
    
    const tree: TreeNode[] = [
        {
            title: 1,
            children: [
                {
                    title: 2,
                    children: [
                        {
                            title: 3,
                            children: [
                                {
                                    title: 4
                                },
                                {
                                    title: 5
                                },
                                {
                                    title: 6
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    console.log(mapRecursive(tree, (value: number) => value * 10000));
    console.log(tree);
    
    
}(window));
