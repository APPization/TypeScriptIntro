# CommonResources Folder

This folder contains resources common to all projects.
They are linked from each project they are needed.
These projects' .csproj file has this command to copy these files on build time.
```xml
  <Target Name="CopyLinkedContentFiles" BeforeTargets="Build">
    <Copy SourceFiles="%(Content.Identity)" DestinationFiles="%(Content.Link)" SkipUnchangedFiles="true" OverwriteReadOnlyFiles="true" Condition="'%(Content.Link)' != ''" />
  </Target>
```

So you should edit these resources in this folder, not in each project.