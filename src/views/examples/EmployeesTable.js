import React, { useEffect, useState } from 'react';
import Header from "../../components/Headers/Header";
import {
    Card,
    CardHeader,
    Container,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Row,
    Table,
} from "reactstrap";
import { getAll } from "../../network/ApiAxios";

const UsersTable = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const runAsync = async () => {
            const response = await getAll();
            const { data } = response;
            console.log(data.data);
            // if (data.success) {
            setEmployees(data.data);
            // }
        }
        runAsync();
    }, []);

    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Employees</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Office</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map(employee => (
                                        <tr key={employee.id}>
                                            <th scope="row">
                                                {employee.attributes.name}
                                            </th>
                                            <td>{employee.attributes.email}</td>
                                            <td>{employee.attributes.role}</td>
                                            <td>{employee.attributes.office.data.attributes.name}</td>
                                            <td className="text-right">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                        className="btn-icon-only text-light"
                                                        href="#pablo"
                                                        role="button"
                                                        size="sm"
                                                        color=""
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <i className="fas fa-ellipsis-v" />
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default UsersTable;
