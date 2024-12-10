import { api } from "@/services/api"
import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native"

export default function Home() {
    const [categories, setCategories] = useState();

    async function fetchCategories(){
        try{
            const { data } = await api.get("/categories")
            setCategories(data);
        } catch(error) {
            Alert.alert("Categorias", "Não foi possível carregar as categorias.")
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Text>Home</Text>
        </View>
    )
}