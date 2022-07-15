import ProfileLayout from "@/Layouts/ProfileLayout";
import {Box, Button, Typography} from "@mui/material";
import Guest from '@/Layouts/Guest';
import { useForm, usePage } from "@inertiajs/inertia-react";

const MyProfile =()=>{

    const { profile } = usePage().props;
    const { data, setData, put,post , errors } = useForm({
    
        firstname:profile.name ||"",
        lastname: profile.lastname ||"",
        email: profile.email ||"",
        phone: profile.phone||"",
        address: profile.address ||"",
        country: profile.country ||"",
        profession: profile.profession ||"",
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("profiles.update", profile.id));
    }

    console.log(data)
    return(
        <ProfileLayout>
              <Box component="form" noValidate autoComplete="off">
                    <Box>
                         

                        <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Nom<span className="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("firstname", e.target.value)
                                        }
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
                                    />
                                      <span className="text-red-600">
                                    {errors.firstname}
                                </span>
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Prenom<span className="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={data.lastname}
                                    onChange={(e) =>
                                        setData("lastname", e.target.value)
                                    }
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Email<span className="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
                                    />
                                     
                                    {errors.email ?
                                <Typography color="error">erreur le format d'email n'est pas valide</Typography>
                                       :null
                                    }
                             
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Phone<span className="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
                                    />
                                     {errors.phone ?
                                <Typography color="error">erreur il ya un caractère invalide</Typography>
                                       :null
                                    }
                                </div>
                            </div>
                           
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Profession<span className="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="profession"
                                        value={data.profession}
                                        onChange={(e) =>
                                            setData("profession", e.target.value)
                                        }
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Country<span className="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="country"
                                        value={data.country}
                                        onChange={(e) =>
                                            setData("country", e.target.value)
                                        }
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Address<span className="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="address"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
                                    />
                                </div>
                            </div>
                        </div>
                        
                      <Box
                         display="flex"
                         justifyContent="flex-start"
                         alignItems="flex-start"
                         mt={3}
                      >
                      <Button
                        variant="contained"
                        type="submit"
                        color="error"
                        sx={{

                            mb: 2,
                            fontFamily: "Inter-Regular",
                        }}
                       onClick={handleSubmit}
                    >
                        <Typography variant="h7" fontFamily="Inter-Regular"> Mettre a jour le profile</Typography>
                       
                    </Button>
                      </Box>
                    </Box>
                </Box>

        </ProfileLayout>
    )
}
export default MyProfile
