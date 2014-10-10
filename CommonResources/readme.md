# CommonResources Folder

This folder contains resources common to all projects.
Each project's .csproj file has a command to copy these files to each project.
```xml
  <Target Name="CopyLinkedContentFiles" BeforeTargets="Build">
    <Copy SourceFiles="%(Content.Identity)" DestinationFiles="%(Content.Link)" SkipUnchangedFiles="true" OverwriteReadOnlyFiles="true" Condition="'%(Content.Link)' != ''" />
  </Target>
```

Edit these resources in this folder, not in each project.
They will be copied to each project.