import bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

export function FeaturesTable() {   
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    const toolTips = {
        customFields: 'Custom fields allow you to record additional information unique to your contacts, cases or sales opportunities.',
        activityReporting: 'Shows activities completed by each user and the specific activity types.',
        twoFactorAuth: 'Add an extra layer of security to your Capsule Account using your mobile device.',
        apiAccess: 'Use Capsule\'s API to integrate with your custom or third party application.'
    }

    return(
        <table className="table features-table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col" className="table-text-center">Others</th>
                    <th scope="col" className="table-text-center">Omega</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">Storage</th>
                    <td className="table-text-center">
                        <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
                    </td>
                    <td className="table-text-center">
                        <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
                    </td>
                </tr>

                <tr>
                    <th scope="row">Custom Fields <i className="bi bi-info-circle text-muted small ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title={toolTips.customFields}></i></th>
                    <td className="table-text-center">
                        <i className="bi bi-x-lg fs-18 text-muted"></i>
                    </td>
                    <td className="table-text-center">
                        <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
                    </td>
                </tr>

                <tr>
                    <th scope="row">Task Management</th>
                    <td className="table-text-center">
                        <i className="bi bi-x-lg fs-18 text-muted"></i>
                    </td>
                    <td className="table-text-center">
                        <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
                    </td>
                </tr>

                <tr>
                    <th scope="row">Activity Reporting <i className="bi bi-info-circle text-muted small ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title={toolTips.activityReporting}></i></th>
                    <td className="table-text-center">
                        <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
                    </td>
                    <td className="table-text-center">
                        <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
                    </td>
                </tr>

                <tr>
                    <th scope="row">Two-Factor Authentication <i className="bi bi-info-circle text-muted small ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title={toolTips.twoFactorAuth}></i></th>
                    <td className="table-text-center">
                        <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
                    </td>
                    <td className="table-text-center">
                        <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
                    </td>
                </tr>

                <tr>
                    <th scope="row">API Access <i className="bi bi-info-circle text-muted small ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title={toolTips.apiAccess}></i></th>
                    <td className="table-text-center">
                        <i className="bi bi-x-lg fs-18 text-muted"></i>
                    </td>
                    <td className="table-text-center">
                        <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
                    </td>
                </tr>

                <tr>
                    <th scope="row">Implementation Support</th>
                    <td className="table-text-center">
                        <i className="bi bi-x-lg fs-18 text-muted"></i>
                    </td>
                    <td className="table-text-center">
                        <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}