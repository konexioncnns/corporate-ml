import ProfileLayout from "@/Layouts/ProfileLayout";
import {Box, Button, Typography} from "@mui/material";
import Guest from '@/Layouts/Guest';

const MyProfile =({profile})=>{
    console.log(profile)
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
                                        value={profile.name}
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Prenom<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Prenom"
                                        value={profile.lastname}
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Email<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                      value={profile.email}
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Phone<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={profile.phone}
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
                                    />
                                </div>
                            </div>
                           
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Profession<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="profession"
                                      value={profile.profession}
                                        className="block w-full border-gray-700 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-md"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Country<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="country"
                                        value={profile.country}
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
