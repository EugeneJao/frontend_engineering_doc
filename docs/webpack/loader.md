# loader

## 运行机制

<mermaid>
graph TB
loaderRuner --调用--> loaders
loaders --调用--> callback()
</mermaid>