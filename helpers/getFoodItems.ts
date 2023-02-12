import { createClient } from "contentful";


const client = createClient({
    space: "xx2dzasjcpic",
    accessToken: "Shkp5PbccjOlxcv1F0xI-ZfxwZ0i2lN9lv_6hC8eS4s",
  });


export const getCategories = async () => {
    const categories = await client.getEntries({
        content_type: "category",
        include: 10,
      });
    return categories;
}



export const getFoodItems = async (category:any) => {

    const categories = await client.getEntries({
        content_type: "category",
    })
    const currentCategory = categories.items.find((item:any) => item.fields.title_id === category)
    const categoryId = currentCategory?.sys.id

    const linkedItemsToCategory = await client.getEntries({
        links_to_entry: categoryId,
    })

    return linkedItemsToCategory;
}

export const getPrilohy = async () => {
    const prilohy = await client.getEntries({
        content_type: "prilohy",
    })
    return prilohy;
}