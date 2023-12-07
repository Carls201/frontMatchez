import { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, Button, ScrollView, Platform } from "react-native";
import { Input, Radio, VStack, HStack, Icon, Center } from "native-base";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./CreateSalaForm.form";
import { useAuth } from "../../../hooks";
import { styles } from "./CreateSalaForm.styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { assets } from "../../../assets";
const { backColor1, backColor2, textColor1, textColor2, orangeColor, mainColor } = assets.colors;



// console.log(getDeportes);

export function CreateSalaForm() {
    const {accessToken, crearPerfil, deportes, getDeportes} = useAuth();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);


    const formik = useFormik({
        initialValues: initialValues(),
        // validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async(formValue) => {
            try {
                formValue.fecha_encuentro = date + 'T' + time
                console.log(formValue);
                // await crearPerfil(accessToken, formValue);
            } catch (error) {
                console.error(error);
            }
        }
    });

    

    useEffect( () => {
        getDeportes(accessToken) 
    }, [])
    // console.log(deportes);
    // obtenerDeportes().then(data => console.log(data))

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || formik.values.fechaNacimiento;
        setShow(Platform.OS === 'ios');
        
        // Ajuste para GMT-3
        const gmt3Offset = 3 * 60 * 60000; // 3 horas en milisegundos
        const adjustedDate = new Date(currentDate.getTime() - gmt3Offset);
        const formatDate = adjustedDate.toISOString().split('T')[0];
        setDate(formatDate);

        // formik.setFieldValue('fecha_encuentro', selectedDate);
        // setDate(currentDate);
    };

    const onChange2 = (event, selectedDate) => {
        const currentDate = selectedDate || formik.values.fecha_encuentro;
        setShow2(Platform.OS === 'ios');

        const gmt3Offset = 3 * 60 * 60000;
        const adjustedDate = new Date(currentDate.getTime() - gmt3Offset);
        const formatDate = adjustedDate.toISOString().split('T')[1];

        setTime(formatDate);

        // formik.setFieldValue('fecha_encuentro', selectedDate);
        // setDate(currentDate);
    };


    const showDatepicker = () => {
        setShow(true);
    };

    const showDatepicker2 = () => {
        setShow2(true);
    };



    const [salaSize, setSalaSize] = useState(0);

    const incrementSalaSize = () => {
        setSalaSize(prevSize => prevSize < 20 ? prevSize + 1 : prevSize);
    };

    const decrementSalaSize = () => {
        setSalaSize(prevSize => prevSize > 0 ? prevSize - 1 : prevSize);
    };

    useEffect(() => {
        formik.setFieldValue('tope_sala', salaSize.toString());
    }, [salaSize]);

    
    const deportesIconos = {
        basket: 'basketball-ball',
        Padel: 'table-tennis',
        Futbol: 'futbol',
    };
    // console.log(formik.values.fecha_encuentro);
    return (
        <ScrollView>

            <View style={styles.content}>

                {/* Nombre Sala */}
                <View style={styles.contentInputs}>
                    <Text style={styles.text}>Dale un nombre a tu <Text style={styles.textOrange}>sala</Text></Text>
                    <Input
                        placeholder="Nombre"
                        variant="unstyled"
                        autoCapitalize="none"
                        keyboardType="text" // Para facilitar la entrada de fechas
                        value={formik.values.nombre_sala}
                        onChangeText={(text) => formik.setFieldValue('nombre_sala', text)}
                        style={styles.input}
                    />
                </View>

                {/* Tamaño Sala */}

                
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={decrementSalaSize}>
                        <Icon as={<FontAwesome5 name="minus-circle" />} size="8" />
                    </TouchableOpacity>

                    <Text style={{fontSize: 50, marginLeft: 10, marginRight: 10, color: textColor1}}>{salaSize}</Text>

                    <TouchableOpacity onPress={incrementSalaSize}>
                        <Icon as={<FontAwesome5 name="plus-circle" />} size="8" />
                    </TouchableOpacity>
                </View>






                {/* Elegir Fecha y hora */}

                {/* FECHA */}
                {show && <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode={'date'} // Cambia a 'time' para la selección de hora
                    is24Hour={true} // para formato de 24 horas, cambia a false si prefieres AM/PM
                    display="spinner" // para Android, puedes elegir 'spinner' o 'clock'
                    textColor="white" // Solo para iOS, establece el color del texto
                    style={{textColor: '#fff' }} // Estilos personalizados aquí, algunos estilos solo funcionan en iOS
                    onChange={onChange}
                />}
                {show2 && <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode={'time'} // Cambia a 'time' para la selección de hora
                    is24Hour={true} // para formato de 24 horas, cambia a false si prefieres AM/PM
                    display="spinner" // para Android, puedes elegir 'spinner' o 'clock'
                    textColor="white" // Solo para iOS, establece el color del texto
                    style={{textColor: '#fff' }} // Estilos personalizados aquí, algunos estilos solo funcionan en iOS
                    onChange={onChange2}
                />}


                <View style={styles.contentButtons}>

                    <Text style={styles.text}>Elige una fecha y hora para el <Text style={styles.textOrange}>partido!</Text></Text>
                    <TouchableOpacity onPress={showDatepicker} style={styles.btn}>
                        <HStack alignItems="center" space={2}>
                            <Icon as={<FontAwesome5 name="calendar" />} size="6" color={textColor2} />
                            
                            <Text style={{color: textColor2 }}>Fecha Encuentro</Text>
                            <View style={{ flex: 1 }} /> 
                            {date && <Icon as={<FontAwesome5 name="check-circle" />} size="6" color='#65EB2F' />}
                        </HStack>
                    </TouchableOpacity>

                    {/* HORA */}
                    <TouchableOpacity onPress={showDatepicker2} style={styles.btn}>
                        <HStack alignItems="center" space={2}>

                        
                            <Icon as={<FontAwesome5 name="clock" />} size="6" color={textColor2} />
                            <Text style={{color: textColor2}}>Hora Encuentro</Text>
                            <View style={{ flex: 1 }} /> 
                            {time && <Icon as={<FontAwesome5 name="check-circle" />} size="6" color='#65EB2F' />}
                        
                        </HStack>
                    </TouchableOpacity>
                </View>


                {/* Elegir un Deporte */}
                
                <View style={styles.contentButtons}>
                    <Text style={styles.text}>Elige un <Text style={styles.textOrange}>Deporte!</Text></Text>
                    <VStack space={4}>
                        <Radio.Group
                        name="deporteGroup"
                        accessibilityLabel="deporte"
                        value={formik.values.deporte}
                        onChange={(nextValue) => {
                            formik.setFieldValue('deporte', nextValue);
                        }}
                        >
                            {deportes.data.map(({deporte, id_deporte}) => {
                                const iconName = deportesIconos[deporte];

                                return(<HStack alignItems="center" justifyContent="space-between" space={8}>
                                    <Icon as={<FontAwesome5 name={iconName} />} size="6" color={textColor2} />
                                    <Text style={{color: textColor2, fontWeight: 'bold'}}>{deporte}</Text>
                                    <View style={{ flex: 1 }} /> 
                                    <Radio value={deporte} my={1} aria-label={`Seleccionar ${deporte}`}>
                                    </Radio>
                                </HStack>)
                            })
                            }

                            {/* <HStack alignItems="center" justifyContent="space-between" space={8}>
                                <Icon as={<FontAwesome5 name="basketball-ball" />} size="6" color={textColor2} />
                                <Text style={{color: textColor2, fontWeight: 'bold'}}>Basket</Text>
                                <Radio value="Basket" my={1} accessibilityLabell="Seleccionar Basket">
                                </Radio>
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between" space={2}>
                                <Icon as={<FontAwesome5 name="table-tennis" />} size="6" color={textColor2} />
                                <Text style={{color: textColor2, fontWeight: 'bold', flex: 1, textAlign: 'center'}}>Tenis</Text>
                                <Radio value="Tenis" my={1} accessibilityLabel="seleccionar Tenis" >
                                
                                </Radio>
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between" space={2}>
                                <Icon as={<FontAwesome5 name="futbol" />} size="6" color={textColor2} />
                                <Text style={{color: textColor2, fontWeight: 'bold', flex: 1, textAlign: 'center'}}>Futbol</Text>
                                <Radio value="Futbol" my={1} accessibilityLabel="Seleccionar Futbol">
                                
                                </Radio>
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between" space={2}>
                                <Icon as={<FontAwesome5 name="football-ball" />} size="6" color={textColor2} />
                                <Text style={{color: textColor2, fontWeight: 'bold', flex: 1, textAlign: 'center'}}>Rugby</Text>
                                <Radio value="Rugby" my={1} accessibilityLabel="Seleccionar Rugby"/>
                            </HStack> */}

                        </Radio.Group>
                    </VStack>
                </View>

                
                

                <TouchableOpacity onPress={formik.handleSubmit} style={styles.btn2}>
                    <Text style={styles.textBtn}>Completar Perfil</Text>
                </TouchableOpacity>
                {/* <Button onPress={formik.handleSubmit} isLoading={formik.isSubmitting} title="Completar Perfil"/> */}
            </View>
        </ScrollView>
    )
}
