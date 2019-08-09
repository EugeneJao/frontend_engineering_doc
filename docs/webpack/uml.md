# uml

## 主要类之间的关系

@startuml
class Tapable {
  - _plugins []
  + hasPlugins():boolean
  + apply():void
  + applyPlugins():void
  + applyPluginsWaterfall():void
  + applyPluginsBailResult():void
  + applyPluginsAsyncSeries():void
  + applyPluginsAsyncSeriesBailResult():void
  + applyPluginsAsyncWaterfall():void
  + applyPluginsParallel():void
  + applyPluginsParallelBailResult():void
}

class Compiler {
  + outputFileSystem *
  + inputFileSystem *
  + options Object
  + run():void
  + createChildCompiler()
  + runAsChild()
  + compile()
  + emitAssets()
}

class Compilation {
  + name String
  + compiler Compiler
  + hooks:Object,
  + resolverFactory ResolverFactory
  + mainTemplate MainTemplate
  + chunkTemplate ChunkTemplate
  + moduleTemplate ModuleTemplate
  + modules Module[]
  + chunks Chunk[]
  + assets CompilationAssets
  + dependencyTemplates Map
  + dependencyFactories Map
  + addEntry():void
  + seal():void
}

class ModuleTemplate {
  + runtimeTemplate RuntimeTemplate
  + type any
  + hooks Object
  + render(module:Module, dependencyTemplates:any, options:Object):Source
  + updateHash(hash:Hash):void
}

class ChunkTemplate {
  + outputOptions Object
  + hooks Object
  + getRenderManifest(options: RenderManifestOptions): any[]
  + updateHash(hash:Hash):void
  + updateHashForChunk(hash: String, chunk: Chunk, moduleTemplate: ModuleTemplate, dependencyTemplates: Map<Function, DependencyTemplate>): void
}

class MainTemplate {
  + outputOptions any
  + hooks
  + requireFn String
  + getRenderManifest(options: RenderManifestOptions):any[]
  + renderBootstrap(hash: String, chunk: Chunk, moduleTemplate: ModuleTemplate, dependencyTemplates: Map<Function, DependencyTemplate>):String[]
  + render(hash: String, chunk: Chunk, moduleTemplate: ModuleTemplate, dependencyTemplates: Map<Function, DependencyTemplate>):ConcatSource
  + renderRequireFunctionForModule(hash: String, chunk: Chunk, varModuleId: String|Number):any
  + renderAddModule(hash: String, chunk: Chunk, varModuleId: String|Number, varModule: Module):any
  + renderCurrentHashCode(hash: String, length: Number):String
  + getPublicPath(options: Object):String
  + getAssetPath(path: any, options: any):any
  + updateHash(hash: Hash):void
  + updateHashForChunk(hash: String, chunk: Chunk, moduleTemplate: ModuleTemplate, dependencyTemplates: Map<Function, DependencyTemplate>): void
  + useChunkHash(chunk: Chunk):Boolean
}

class Chunk {
  + id
  + name
  + modules SortableSet<Module>
  + hasRuntime()
  + addModule()
}

class DependenciesBlock {
  + dependencies Dependency[]
  + blocks:AsyncDependenciesBlock[]
  + variables DependenciesBlockVariable[]
  + addBlock(block:AsyncDependenciesBlock):void
  + addVariable(name:string, expression:string, dependencies:Dependency[]):void
  + addDependency(dependency:Dependency):void
  + removeDependency(dependency:Dependency):void
  + updateHash(hash:Hash):void
  + disconnect():void
  + unseal():void
  + hasDependencies(filter:DependencyFilterFunction):boolean
  + sortItems():void
}

class AsyncDependenciesBlock {
  + groupOptions Object|String|undefined|null|0
  + chunkGroup ChunkGroup
  + module Module
  + loc SynteticDependencyLocation|RealDependencyLocation
  + request any
  + parent DependenciesBlock
  + chunkName String
}

abstract class Dependency {
  + module Module|null
  + weak boolean
  + optional boolean
  + loc DependencyLocation
  + getReference():DependencyReference|null
  + getResourceIdentifier():null
  + getExports():null
  + getWarnings():null
  + getErrors():null
  + updateHash（hash:Hash):void
  + disconnect():void
}

class Module {
  + id number|string
  + index number
  + index2 number
  + type string
  + context string
  + debugId number
  + hash string
  + factoryMeta object
  + warnings WebpackError[]
  + errors WebpackError[]
  + buildMeta object
  + buildInfo object
  + reasons ModuleReason[]
  + + issuer Module
  + profile undefined | object
  - _chunks SortableSet<Chunk>
  + depth number
  + built boolean
  + used null|boolean
  + usedExports false|true|string[]
  + optimizationBailout string[]|OptimizationBailoutFunction[]
  - _rewriteChunkInReasons undefined|object[]
  + useSourceMap boolean
  - _source any
  + exportsArgument any
  + moduleArgument any
  + optional boolean
  + chunksIterable:SortableSet<Chunk
  + addChunk(chunk:Chunk):boolean
  + setChunks(chunks:Chunk[]):void
  + getChunks() Chunk[]
  + removeChunk(chunk:Chunk):boolean
  + getNumberOfChunks():number
  + isInChunk(chunk:Chunk):boolean
  + isEntryModule():boolean
  + hasEqualsChunks(otherModule:any):boolean
  + addReason(module:any, dependency:any, explanation:any):void
  + removeReason(module:any, dependency:any):boolean
  + hasReasonForChunk(chunk:Chunk):boolean
  + hasReasons():boolean
  + rewriteChunkInReasons(oldChunk:Chunk, newChunks:Chunk):void
  - _doRewriteChunkInReasons(oldChunk:Chunk, newChunks:Chunk):void
  + isUsed(exportName:string):string|boolean
  + isProvided(exportName:string):any
  + toString():string
  + needRebuild(fileTimestamps:any, contextTimestamps:any):boolean
  + unbuild():void
}


class ContextModule {
  + request any
  + userRequest any
  + rawRequest any
  + binary Boolean
  + parser any
  + generator any
  + resource any
  + matchResource any
  + loaders any
  + resolveOptions any
  + error any
  - _source Source
  - _buildHash: String
  + buildTimestamp Number|undefined
  - _cachedSources Map
  + useSourceMap Boolean
  + lineToLine Boolean
  - _lastSuccessfulBuildMeta Object
  + identifier():any
  + readableIdentifier(requestShortener:any):any
}

class ContextModuleFactory {
  + hooks Object
  + resolverFactory ResolverFactory
  + create(data:any, callback:Function)
  + resolveDependencies(fs:fs, options:any, callback:Function):any
}

class NormalModule {
  + request any
  + userRequest any
  + rawRequest any
  + binary Boolean
  + resource Source[]
  + matchResource Source[]
  + loaders any
  + resolveOptions any
  + error Error
  + errors Error[]
  + _source any
  + _buildHash String
  + buildTimestamp Number|undefined
  + _cachedSources Map
  + useSourceMap Boolean
  + lineToLine Boolean
  + _lastSuccessfulBuildMeta Object
  + identifier():any
  + readableIdentifier(requestShortener:any):any
  + libIdent(options:Object):String
  + nameForCondition():Source[]
  + updateCacheModule(module:Module)
  + createSourceForAsset(name:String, content:any, sourceMap:any):Source
  + createLoaderContext(resolver:any, options:Object, compilation:Compilation, fs:fs):Object
  + getCurrentLoader(loaderContext:Object, index:Number):any
  + createSource(source:Source, resourceBuffer:any, sourceMap:any):Source
  + doBuild(options:Object, compilation:Compilation, resolver:any, fs:fs, callback:Function)
  + markModuleAsErrored(error:Error)
  + applyNoParseRule(rule:RegExp|String|Function, contentany):Boolean
  + shouldPreventParsing(noParseRule:RegExp|String|Function, request:any):Boolean
  - _initBuildHash(compilation:Compilation)
  + build(options:Object, compilation:Compilation, resolver:any, fs:fs, callback:Function)
  + getHashDigest(dependencyTemplates: any):String
  + source(dependencyTemplates:any, runtimeTemplate:RuntimeTemplate, type:String):Source
  + originalSource():Source
  + needRebuild(fileTimestamps:Map, contextTimestamps:Map):Boolean
  + size():Number
  + updateHash(hash:Hash)
}

class NormalModuleFactory {
  + hooks Object
  + resolverFactory ResolverFactory
  + ruleSet RuleSet
  + cachePredicate Boolean
  + context String
  + parserCache any
  + generatorCache any
  + create(data:any, callback:Function):any
  + resolveRequestArray(contextInfo:any, context:any, array:[], resolver:any, callback:Function):any
  + getParser(type:String, parserOptions:Object):any
  + createParser(type:String, parserOptions: Object):any
  + getGenerator(type:String, generatorOptions:Object):tapable.SyncHook
  + getResolver(type:String, resolveOptions:Object):'enhanced-resolve'.Resolver
}


class DependenciesBlockVariable {
  + name string
  + expression string
  + dependencies Dependency[]
  + updateHash(hash:Hash):void
  + expressionSource(dependencyTemplates:Map<Function, DependencyTemplate>, runtimeTemplate:RuntimeTemplate):
}

package "dependencies" {
  package "NullDependency.js" {
    abstract class NullDependency {
      + type string
      + Template NullDependencyTemplate
      + updateHash():void
    }
    class NullDependencyTemplate {
      + apply()
    }
    NullDependency -up-|> Dependency
    NullDependency -right-> NullDependencyTemplate
  }
  package "AMDDefineDependency.js" {
    class AMDDefineDependency {
      + range any
      + arrayRange any
      + functionRange any
      + objectRange any
      + namedModule any
      + localModule any
      + type string
      + Template AMDDefineDependencyTemplate
    }
    class AMDDefineDependencyTemplate {
      + definitions object
      + apply(dependency:AMDDefineDependency, source:any):void
      + localModuleVar(dependency:AMDDefineDependency):any
      + branch(dependency:AMDDefineDependency):string
      + replace(dependency:AMDDefineDependency, source:ReplaceSource, definition:string, text:string):void
    }
    AMDDefineDependency -up-|> NullDependency
    AMDDefineDependencyTemplate -up-> AMDDefineDependency
  }
  
  package "AMDRquireDependency.js" {
    class AMDRquireDependency{
      + block AsyncDependenciesBlock
      + Template AMDRequireDependencyTemplate
    }
    class AMDRquireDependencyTemplate {
      + apply(dep:AMDRquireDependency, source:ReplaceSource, runtime:RunimeTemplate):void
    }
    AMDRquireDependency -up-|> NullDependency
    AMDRquireDependencyTemplate -up-> AMDRquireDependency

  }
  
  package "CommonJsRequireDependency.js" {
    class CommonJsRequireDependency {
      + range any
      + type string
      + Template ModuleDependencyTemplateAsId
    }
    class ModuleDependencyTemplateAsId {
      + apply(dep:any, source:ReplaceSource, runtime:RunimeTemplate):void
    }
    CommonJsRequireDependency -up-|> NullDependency
    ModuleDependencyTemplateAsId -up-> CommonJsRequireDependency
  }
}

package "webpack-sources" {
  class Source {
    + source():String
    + size():Number
    + map(options:Object):Object|null
    + sourceAndMap(options:Object):Object
    + updateHash(hash:Hash):void
    + node(options:Object):SourceNode
    + listNode(options:Object):SourceNode
  }
  class ConcatSource {
    + add(item:Source|String):void
  }
  class ReplaceSource {
    + replace(start:Number, end:Number, replacement:String):void
    + insert(pos:Number,insertion:String):void
  }

  Source <|-up- RawSource
  Source <|-up- OriginalSource
  Source <|-up- SourceMapSource
  Source <|-up- LineToLineMappedSource
  Source <|-up- CachedSource
  Source <|-up- PrefixSource
  Source <|-up- ConcatSource
  Source <|-up- ReplaceSource
  ReplaceSource <.down. ModuleDependencyTemplateAsId
  ReplaceSource <.down. AMDRquireDependencyTemplate
  ReplaceSource <.down. AMDDefineDependencyTemplate
}



Tapable <|-left- ModuleTemplate
Tapable <|-left- ChunkTemplate
Tapable <|-left- MainTemplate
Tapable <|-down- Compiler
Tapable <|-down- Compilation
Tapable <|-- ContextModuleFactory
Tapable <|-- NormalModuleFactory
Compilation -left-> Chunk
Compilation -down-> DependenciesBlock
Compilation -right-> Compiler
Compilation -left-> MainTemplate
Compilation -left-> ChunkTemplate
Compilation -left-> ModuleTemplate
Module <|-up- NormalModule
Module <|-up- ContextModule
NormalModuleFactory -down-> NormalModule
ContextModuleFactory -down-> ContextModule
DependenciesBlock <|-down- AsyncDependenciesBlock
DependenciesBlock -up-> AsyncDependenciesBlock
DependenciesBlock -down-> Dependency
DependenciesBlock -left-> DependenciesBlockVariable
DependenciesBlock <|-right- Module
DependenciesBlockVariable --> RuntimeTemplate 
ModuleTemplate --> RuntimeTemplate



@enduml

## webpack关键结构

@startuml
Tapable <|-left- ModuleTemplate
Tapable <|-left- ChunkTemplate
Tapable <|-left- MainTemplate
Tapable <|-down- Compiler

Tapable <|-down- Compilation
Compilation -left-> Chunk

Compilation -down-> DependenciesBlock
Compilation -right-> Compiler
Compilation -left-> MainTemplate
Compilation -left-> ChunkTemplate
Compilation -left-> ModuleTemplate

Module <|-up- NormalModule
Module <|-up- ContextModule

NormalModuleFactory -down-> NormalModule
ContextModuleFactory -down-> ContextModule
DependenciesBlock <|-down- AsyncDependenciesBlock
DependenciesBlock -up-> AsyncDependenciesBlock
DependenciesBlock -down-> Dependency
DependenciesBlock -left-> DependenciesBlockVariable
DependenciesBlock <|-right- Module
DependenciesBlockVariable --> RuntimeTemplate 
ModuleTemplate --> RuntimeTemplate
@enduml


## 关键依赖

* enhanced-resolve
