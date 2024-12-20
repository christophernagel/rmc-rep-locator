import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";
import RepLocator from "./components/RepLocator";

registerBlockType("rmc-rep-locator/rep-locator", {
  title: "Rep Locator",
  description: "RMC Rep Locator Block",
  category: "widgets",
  icon: "location",
  edit: function Edit() {
    const blockProps = useBlockProps();
    return (
      <div {...blockProps}>
        <RepLocator isEditor={true} />
      </div>
    );
  },
  save: function Save() {
    return null;
  },
});
