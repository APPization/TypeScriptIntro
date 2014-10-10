# Resource Folder

This folder contains resources common to all projects.
Each project's .csproj file has a command to copy these files to each project.
<code>
  <Target Name="CopyLinkedContentFiles" BeforeTargets="Build">
    <Copy SourceFiles="%(Content.Identity)" DestinationFiles="%(Content.Link)" SkipUnchangedFiles="true" OverwriteReadOnlyFiles="true" Condition="'%(Content.Link)' != ''" />
  </Target>
</code>
So you shouldn't edit them directly.