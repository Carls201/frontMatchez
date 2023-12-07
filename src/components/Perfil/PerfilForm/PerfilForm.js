import { useContext } from "react";
import { View, Text, TouchableOpacity, Button, ScrollView } from "react-native";
import { Input, Radio, VStack, HStack, Icon } from "native-base";
import { useFormik } from "formik";
import { Perfil } from "../../../api";
import { initialValues, validationSchema } from "./PerfilForm.form";
import { useAuth } from "../../../hooks";
import { styles } from "./PerfilForm.styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker"

import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { imageExpoFormat } from "../../../utils";

const perfilController = new Perfil();

export function PerfilForm() {
    const {accessToken, crearPerfil} = useAuth();
    // console.log(accessToken);
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async(formValue) => {
            try {
                // console.log(formValue);
                await crearPerfil(accessToken, formValue);
            } catch (error) {
                console.error(error);
            }
        }
    });

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || formik.values.fechaNacimiento;
        setShow(Platform.OS === 'ios');
    
        // Ajuste para GMT-3
        const gmt3Offset = 3 * 60 * 60000; // 3 horas en milisegundos
        const adjustedDate = new Date(currentDate.getTime() - gmt3Offset);
    
        const formatDate = adjustedDate.toISOString().split('T')[0];
        formik.setFieldValue('fecha_nac', formatDate);
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    const openGallery = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
        });

        if(!result.canceled){
            const file = imageExpoFormat(result.assets[0].uri);
            formik.setFieldValue('foto', file);
            
        }
    }

    console.log(formik.values.fecha_nac);

    // console.log(date);
    return (
        <ScrollView>

            <View style={styles.content}>

                <Text style={styles.text}>Agrega una foto</Text>
                <View style={styles.contentButton}>
                    <TouchableOpacity onPress={openGallery} style={styles.buttonAdd}>
                        <Text style={styles.buttonText}>{!formik.values.foto?'+':<Icon as={<FontAwesome5 name="check" />} size="10"/>}</Text>
                    </TouchableOpacity>
                </View>
                
                <Input
                    placeholder="Nombre"
                    variant="unstyled"
                    autoCapitalize="none"
                    keyboardType="text" // Para facilitar la entrada de fechas
                    value={formik.values.nombre}
                    onChangeText={(text) => formik.setFieldValue('nombre', text)}
                    style={styles.input}
                />

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        display="default"
                        onChange={onChange}
                        maximumDate={new Date()} // Para evitar que se elijan fechas futuras
                    />
                )}

                <View>
                    <TouchableOpacity onPress={showDatepicker} style={styles.btn}>
                        <Text style={styles.textBtn}>{!formik.values.fecha_nac?'Fecha de nacimiento':formik.values.fecha_nac}</Text>
                    </TouchableOpacity>
                    {/* <Button onPress={showDatepicker} title="Fecha de nacimiento"></Button> */}
                </View>

                <Input
                    placeholder="Peso"
                    variant="unstyled"
                    autoCapitalize="none"
                    keyboardType="numeric" // Para facilitar la entrada de fechas
                    value={formik.values.peso}
                    onChangeText={(text) => formik.setFieldValue('peso', text)}
                    style={styles.input}
                />


                <Input
                    placeholder="Altura"
                    variant="unstyled"
                    autoCapitalize="none"
                    keyboardType="numeric" // Para facilitar la entrada de fechas
                    value={formik.values.altura}
                    onChangeText={(text) => formik.setFieldValue('altura', text)}
                    style={styles.input}
                />

                
                
                <Text style={styles.text}>Sexo</Text>
                <HStack space={4} style={styles.contentRadio}>
                    <Radio.Group
                        name="myRadioGroup"
                        accessibilityLabel="gender"
                        value={formik.values.sexo}
                        onChange={(nextValue) => {
                            formik.setFieldValue('sexo', nextValue);
                        }}
                    >
                        <Radio value="Hombre" my={1}>
                            <Text style={styles.text}>Hombre</Text>
                            <Icon as={<FontAwesome5 name="mars" />} size="10"/>
                        </Radio>
                        <Radio value="Mujer" my={1}>
                            <Text style={styles.text}>Mujer</Text>
                            <Icon as={<FontAwesome5 name="venus" />}  size="10"/>
                        </Radio>
                    </Radio.Group>
                </HStack>

                <TouchableOpacity onPress={formik.handleSubmit} isLoading={formik.isSubmitting} style={styles.btn2}>
                    <Text style={styles.textBtn}>Completar Perfil</Text>
                </TouchableOpacity>
                {/* <Button onPress={formik.handleSubmit} isLoading={formik.isSubmitting} title="Completar Perfil"/> */}
            </View>
        </ScrollView>
    )
}
