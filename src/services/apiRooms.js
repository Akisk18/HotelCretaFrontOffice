import supabase, { supabaseURL } from "./supabase";

export async function getRooms() {
  const { data, error } = await supabase.from("rooms").select("*");
  if (error) {
    console.error(error);
    throw new Error("Rooms could not be loaded");
  }
  return data;
}

export async function createEditRoom(newRoom, id) {
  const hasImagePath = newRoom.image?.startsWith?.(supabaseURL);

  const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newRoom.image
    : `${supabaseURL}/storage/v1/object/sign/rooms/${imageName}`;
  let query = supabase.from("rooms");
  if (!id) query = query.insert([{ ...newRoom, image: imagePath }]);

  if (id) query = query.update([{ ...newRoom, image: imagePath }]).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Room could not be created");
  }

  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("rooms")
    .upload(imageName, newRoom.image);

  if (storageError) {
    await supabase.from("romms").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Room image could not be upload and the room was not created"
    );
  }
  return data;
}

export async function deleteRoom(id) {
  const { data, error } = await supabase.from("rooms").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Room could not be deleted");
  }
  return data;
}
