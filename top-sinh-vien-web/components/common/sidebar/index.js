// @flow
import React from 'react';
import Image from 'react-image';
import { connect } from 'react-redux';

type Props = {};

const SidebarWrapper = (props: Props) => {
  return (
    <div className="sidebar" data-color="rose" data-background-color="black">
      <div className="logo">
        <a href="http://www.creative-tim.com" className="simple-text logo-mini">
          GB
        </a>
        <a href="http://www.creative-tim.com" className="simple-text logo-normal">
          Top Sinh Vien
        </a>
      </div>

      <div className="sidebar-wrapper">
        <div className="user">
          <div className="photo">
            <Image
              src={['https://cdn.pixabay.com/photo/2019/05/02/08/24/coast-4172859_1280.jpg']}
              className="h-100 w-100"
              alt=""
            />
          </div>

          <div className="user-info">
            <a data-toggle="collapse" href="#collapseExample" className="username">
              <span>
                Tania Andrew
                <b className="caret" />
              </span>
            </a>

            <div className="collapse" id="collapseExample">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> MP </span>
                    <span className="sidebar-normal"> My Profile </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> EP </span>
                    <span className="sidebar-normal"> Edit Profile </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="sidebar-mini"> S </span>
                    <span className="sidebar-normal"> Settings </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul className="nav">
          <li className="nav-item active ">
            <a className="nav-link" href="../examples/dashboard.html">
              <i className="material-icons">dashboard</i>
              <p> Dashboard </p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" data-toggle="collapse" href="#pagesExamples">
              <i className="material-icons">image</i>
              <p>
                {' '}
                Pages
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="pagesExamples">
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/pricing.html">
                    <span className="sidebar-mini"> P </span>
                    <span className="sidebar-normal"> Pricing </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/rtl.html">
                    <span className="sidebar-mini"> RS </span>
                    <span className="sidebar-normal"> RTL Support </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/timeline.html">
                    <span className="sidebar-mini"> T </span>
                    <span className="sidebar-normal"> Timeline </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/login.html">
                    <span className="sidebar-mini"> LP </span>
                    <span className="sidebar-normal"> Login Page </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/register.html">
                    <span className="sidebar-mini"> RP </span>
                    <span className="sidebar-normal"> Register Page </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/lock.html">
                    <span className="sidebar-mini"> LSP </span>
                    <span className="sidebar-normal"> Lock Screen Page </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/user.html">
                    <span className="sidebar-mini"> UP </span>
                    <span className="sidebar-normal"> User Profile </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/error.html">
                    <span className="sidebar-mini"> E </span>
                    <span className="sidebar-normal"> Error Page </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item ">
            <a className="nav-link" data-toggle="collapse" href="#componentsExamples">
              <i className="material-icons">apps</i>
              <p>
                {' '}
                Components
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="componentsExamples">
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link" data-toggle="collapse" href="#componentsCollapse">
                    <span className="sidebar-mini"> MLT </span>
                    <span className="sidebar-normal">
                      {' '}
                      Multi Level Collapse
                      <b className="caret"></b>
                    </span>
                  </a>
                  <div className="collapse" id="componentsCollapse">
                    <ul className="nav">
                      <li className="nav-item ">
                        <a className="nav-link" href="#0">
                          <span className="sidebar-mini"> E </span>
                          <span className="sidebar-normal"> Example </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/components/buttons.html">
                    <span className="sidebar-mini"> B </span>
                    <span className="sidebar-normal"> Buttons </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/components/grid.html">
                    <span className="sidebar-mini"> GS </span>
                    <span className="sidebar-normal"> Grid System </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/components/panels.html">
                    <span className="sidebar-mini"> P </span>
                    <span className="sidebar-normal"> Panels </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/components/sweet-alert.html">
                    <span className="sidebar-mini"> SA </span>
                    <span className="sidebar-normal"> Sweet Alert </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/components/notifications.html">
                    <span className="sidebar-mini"> N </span>
                    <span className="sidebar-normal"> Notifications </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/components/icons.html">
                    <span className="sidebar-mini"> I </span>
                    <span className="sidebar-normal"> Icons </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/components/typography.html">
                    <span className="sidebar-mini"> T </span>
                    <span className="sidebar-normal"> Typography </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item ">
            <a className="nav-link" data-toggle="collapse" href="#formsExamples">
              <i className="material-icons">content_paste</i>
              <p>
                {' '}
                Forms
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="formsExamples">
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/forms/regular.html">
                    <span className="sidebar-mini"> RF </span>
                    <span className="sidebar-normal"> Regular Forms </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/forms/extended.html">
                    <span className="sidebar-mini"> EF </span>
                    <span className="sidebar-normal"> Extended Forms </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/forms/validation.html">
                    <span className="sidebar-mini"> VF </span>
                    <span className="sidebar-normal"> Validation Forms </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/forms/wizard.html">
                    <span className="sidebar-mini"> W </span>
                    <span className="sidebar-normal"> Wizard </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item ">
            <a className="nav-link" data-toggle="collapse" href="#tablesExamples">
              <i className="material-icons">grid_on</i>
              <p>
                {' '}
                Tables
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="tablesExamples">
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/tables/regular.html">
                    <span className="sidebar-mini"> RT </span>
                    <span className="sidebar-normal"> Regular Tables </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/tables/extended.html">
                    <span className="sidebar-mini"> ET </span>
                    <span className="sidebar-normal"> Extended Tables </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/tables/datatables.net.html">
                    <span className="sidebar-mini"> DT </span>
                    <span className="sidebar-normal"> DataTables.net </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item ">
            <a className="nav-link" data-toggle="collapse" href="#mapsExamples">
              <i className="material-icons">place</i>
              <p>
                {' '}
                Maps
                <b className="caret"></b>
              </p>
            </a>
            <div className="collapse" id="mapsExamples">
              <ul className="nav">
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/maps/google.html">
                    <span className="sidebar-mini"> GM </span>
                    <span className="sidebar-normal"> Google Maps </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/maps/fullscreen.html">
                    <span className="sidebar-mini"> FSM </span>
                    <span className="sidebar-normal"> Full Screen Map </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/maps/vector.html">
                    <span className="sidebar-mini"> VM </span>
                    <span className="sidebar-normal"> Vector Map </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="../examples/widgets.html">
              <i className="material-icons">widgets</i>
              <p> Widgets </p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="../examples/charts.html">
              <i className="material-icons">timeline</i>
              <p> Charts </p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="../examples/calendar.html">
              <i className="material-icons">date_range</i>
              <p> Calendar </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(SidebarWrapper);
