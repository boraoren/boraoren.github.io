import React from "react";
import {Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr} from "@chakra-ui/table";

const UserStories = () => {
    return (<>

        {/*Actors
            Parent : who has some time to spend with children
            Parent : who has created a playgroup session on Playtime app
            PlayTime app user
            Working parent: using PlayTime app*/}

            <Table >
                <TableCaption>5 USER STORIES</TableCaption>
                <Thead>
                    <Tr>
                        <Th>No</Th>
                        <Th>AS A</Th>
                        <Th>I WANT TO</Th>
                        <Th>SO THAT</Th>
                    </Tr>
                </Thead>
                <Tbody  fontSize={["md", "lg", "xl", "2xl"]}
                        fontFamily={"primary"}
                        fontWeight={400}>
                    <Tr>
                        <Td>1</Td>
                        <Td>Parent</Td>
                        <Td>create a playgroup session depending on my availability</Td>
                        <Td> my kids can play with other kids at our house and socialise during school holidays</Td>
                    </Tr>
                    <Tr>
                        <Td>2</Td>
                        <Td>PlayTime App User</Td>
                        <Td>see the playgroup sessions with vacancy</Td>
                        <Td> I can make bookings for my daughter and I don’t need to take a day off from work</Td>
                    </Tr>
                    <Tr>
                        <Td>3</Td>
                        <Td>Working parent</Td>
                        <Td>my children to join a playgroup session created by other parents</Td>
                        <Td>I can leave my kids to people I know and let my children have good time under their supervision
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>4</Td>
                        <Td>Working parent</Td>
                        <Td> know the playgroup vacancies as soon they are created</Td>
                        <Td>I can book my kid’s place in the playgroup before anyone else</Td>
                    </Tr>
                    <Tr>
                        <Td>4</Td>
                        <Td>Working parent</Td>
                        <Td>I can only reschedule or cancel the playgroup session more than 12 hours before the start of the session</Td>
                        <Td>the other parents can organise their days accordingly
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    )
}

export default UserStories;
