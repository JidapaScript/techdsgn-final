import Tag from "@/components/Tag";

export default function TopicCategories(){
    return (
        <div className="flex-row justify-end space-x-8">
            <Tag tagname="Favourite" />
            <Tag tagname="Food" />
            <Tag tagname="Science" />
            <Tag tagname="Tech" />
            <Tag tagname="Philosophy" />
            <Tag tagname="Ethics" />
            <Tag tagname="Global" />
        </div>
    )
}