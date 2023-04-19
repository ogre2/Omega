import '../../node_modules/bootstrap/js/dist/dropdown';

export function LanguageToggler() {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-soft-light btn-sm dropdown-toggle d-flex align-items-center" id="selectLanguage" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="d-flex align-items-center p-1">
                    <i className="fi fi-us me-1"></i>
                    <span>English (US)</span>
                </span>
            </button>

            <div className="dropdown-menu p-2">
                <a className="dropdown-item d-flex align-items-center active" href="false">
                    <i className="fi fi-us me-1"></i>
                    <span>English (US)</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="false">
                    <i className="fi fi-gb me-1"></i>
                    <span>English (UK)</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="false">
                    <i className="fi fi-fr me-1"></i>
                    <span>French</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="false">
                    <i className="fi fi-dk me-1"></i>
                    <span>Dansk</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="false">
                    <i className="fi fi-es me-1"></i>
                    <span>Español</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="false">
                    <i className="fi fi-nl me-1"></i>
                    <span>Nederlands</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="false">
                    <i className="fi fi-it me-1"></i>
                    <span>Italiano</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="false">
                    <i className="fi fi-cn me-1"></i>
                    <span>中文 (繁體)</span>
                </a>
            </div>
        </div>
    );
}

// 005C45
// 007DFC