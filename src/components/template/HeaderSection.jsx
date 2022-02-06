import React, { Component } from 'react';

class HeaderSection extends Component {

  render() {

    return (
        <>
            <div class="row align-items-center py-4">
                <div class="col-lg-6 col-7">
                    <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                        <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                        <li class="breadcrumb-item"><a href="#">Bagikan</a></li>
                        {/* <li class="breadcrumb-item"><a href="#">Tables</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Tables</li> */}
                        </ol>
                    </nav>
                </div>
                <div class="col-lg-6 col-5 text-right">
                    <a href="#" class="btn btn-sm btn-neutral">Pertanyaan</a>
                    <a href="#" class="btn btn-sm btn-neutral">Responden</a>
                </div>
            </div>

        </>
    )
  }
}


export default HeaderSection;