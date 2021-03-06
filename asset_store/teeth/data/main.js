this.MagicFunc = function (a, b, c) {
    this.root = a;
    this.groupId = b;
    this.prefix = c;
    this.root.setAppEventDelegate(this);
    this.root.setFrameEventDelegate(this);
    this.teethInfo = null;
    this.teethRoot = null;
    this.curTreatStep = 0;
    this.testPointCounter = 0
};
MagicFunc.prototype.getObjHandler = function (b) {
    var a = arguments[1] ? arguments[1] : "scene1";
    var c = this.root.getSceneManager(a).getSceneNode(b);
    return c
};
MagicFunc.prototype.GetObjHandler = function (b) {
    var a = arguments[1] ? arguments[1] : "scene1";
    var c = this.root.getSceneManager(a).getSceneNode(b);
    return c
};
MagicFunc.prototype.GetAniHandler = function (b) {
    var a = this.root.getAnimationManager().findAnimation(b);
    return a
};
MagicFunc.prototype.LimiteEndToEnd = function (a) {
    return a - Math.floor(a)
};
MagicFunc.prototype.LimiteStopToEnd = function (a) {
    if (a < 0) {
        a = 0
    } else {
        if (a > 1) {
            a = 1
        }
    }
    return a
};
MagicFunc.prototype.GetDistance = function (b, a) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y))
};
MagicFunc.prototype.RotateObjectWithFinger = function (b, a) {
    var f = 0;
    var c = 0;
    var e = this.ObjectGroupInfo5.Progress;
    var d = e * (0 - 360);
    if (b.RotateAxis == "z" && d < -90 && d > -270) {
        f = b.Progress - b.Sensitivity * a * b.Direction;
        c = b.ProgressLimitedType
    } else {
        f = b.Progress + b.Sensitivity * a * b.Direction;
        c = b.ProgressLimitedType
    }
    if (c == "EndToEnd") {
        f = this.LimiteEndToEnd(f)
    } else {
        if (c == "StopToEnd") {
            f = this.LimiteStopToEnd(f)
        }
    }
    this.RotateObject(b, f)
};
MagicFunc.prototype.ScaleObjectWithFinger = function (b, a) {
    var c = b.InitScale.x * (1 + a);
    if (c > b.MaxScale) {
        c = b.MaxScale
    }
    if (c < b.MinScale) {
        c = b.MinScale
    }
    b.ObjHandler.Transform.mScale.x = c;
    b.ObjHandler.Transform.mScale.y = c;
    b.ObjHandler.Transform.mScale.z = c
};
MagicFunc.prototype.recovery_common = function (b, a, c) {
    b.ObjHandler.getTransform().resetOrientation();
    nextAngleRadian = 3.1415926 * c / 180;
    if (b.RotateAxis == "x") {
        b.ObjHandler.getTransform().pitch(nextAngleRadian)
    } else {
        if (b.RotateAxis == "y") {
            b.ObjHandler.getTransform().yaw(nextAngleRadian)
        } else {
            if (b.RotateAxis == "z") {
                b.ObjHandler.getTransform().roll(nextAngleRadian)
            }
        }
    }
    b.Progress = a
};
MagicFunc.prototype.recovery_front = function (b, a) {
    b.ObjHandler.getTransform().resetOrientation();
    nextAngleRadian = 0;
    if (b.RotateAxis == "x") {
        b.ObjHandler.getTransform().pitch(nextAngleRadian)
    } else {
        if (b.RotateAxis == "y") {
            b.ObjHandler.getTransform().yaw(nextAngleRadian)
        } else {
            if (b.RotateAxis == "z") {
                b.ObjHandler.getTransform().roll(nextAngleRadian)
            }
        }
    }
    b.Progress = a
};
MagicFunc.prototype.recovery_back = function (b, a) {
    b.ObjHandler.getTransform().resetOrientation();
    nextAngleRadian = 3.1415926 * 180 / 180;
    if (b.RotateAxis == "x") {
        b.ObjHandler.getTransform().pitch(nextAngleRadian)
    } else {
        if (b.RotateAxis == "y") {
            b.ObjHandler.getTransform().yaw(nextAngleRadian)
        } else {
            if (b.RotateAxis == "z") {
                b.ObjHandler.getTransform().roll(nextAngleRadian)
            }
        }
    }
    b.Progress = a
};
MagicFunc.prototype.recovery_left4 = function (b, a) {
    b.ObjHandler.getTransform().resetOrientation();
    nextAngleRadian = 3.1415926 * 270 / 180;
    if (b.RotateAxis == "x") {
        b.ObjHandler.getTransform().pitch(nextAngleRadian)
    } else {
        if (b.RotateAxis == "y") {
            b.ObjHandler.getTransform().yaw(nextAngleRadian)
        } else {
            if (b.RotateAxis == "z") {
                b.ObjHandler.getTransform().roll(nextAngleRadian)
            }
        }
    }
    b.Progress = 0.25
};
MagicFunc.prototype.recovery_left3 = function (b, a) {
    b.ObjHandler.getTransform().resetOrientation();
    nextAngleRadian = 3.1415926 * 180 / 180;
    if (b.RotateAxis == "x") {
        b.ObjHandler.getTransform().pitch(nextAngleRadian)
    } else {
        if (b.RotateAxis == "y") {
            b.ObjHandler.getTransform().yaw(nextAngleRadian)
        } else {
            if (b.RotateAxis == "z") {
                b.ObjHandler.getTransform().roll(nextAngleRadian)
            }
        }
    }
    b.Progress = 0.5
};
MagicFunc.prototype.recovery_left2 = function (b, a) {
    b.ObjHandler.getTransform().resetOrientation();
    nextAngleRadian = 3.1415926 * 90 / 180;
    if (b.RotateAxis == "x") {
        b.ObjHandler.getTransform().pitch(nextAngleRadian)
    } else {
        if (b.RotateAxis == "y") {
            b.ObjHandler.getTransform().yaw(nextAngleRadian)
        } else {
            if (b.RotateAxis == "z") {
                b.ObjHandler.getTransform().roll(nextAngleRadian)
            }
        }
    }
    b.Progress = 0.75
};
MagicFunc.prototype.recovery_left = function (b, a) {
    b.ObjHandler.getTransform().resetOrientation();
    nextAngleRadian = 3.1415926 * 270 / 180;
    if (b.RotateAxis == "x") {
        b.ObjHandler.getTransform().pitch(nextAngleRadian)
    } else {
        if (b.RotateAxis == "y") {
            b.ObjHandler.getTransform().yaw(nextAngleRadian)
        } else {
            if (b.RotateAxis == "z") {
                b.ObjHandler.getTransform().roll(nextAngleRadian)
            }
        }
    }
    b.Progress = 0.25
};
MagicFunc.prototype.recovery_right2 = function (b, a) {
    b.ObjHandler.getTransform().resetOrientation();
    nextAngleRadian = 3.1415926 * 90 / 180;
    if (b.RotateAxis == "x") {
        b.ObjHandler.getTransform().pitch(nextAngleRadian)
    } else {
        if (b.RotateAxis == "y") {
            b.ObjHandler.getTransform().yaw(nextAngleRadian)
        } else {
            if (b.RotateAxis == "z") {
                b.ObjHandler.getTransform().roll(nextAngleRadian)
            }
        }
    }
    b.Progress = a
};
MagicFunc.prototype.recovery_right = function (b, a) {
    b.ObjHandler.getTransform().resetOrientation();
    nextAngleRadian = 3.1415926 * 90 / 180;
    if (b.RotateAxis == "x") {
        b.ObjHandler.getTransform().pitch(nextAngleRadian)
    } else {
        if (b.RotateAxis == "y") {
            b.ObjHandler.getTransform().yaw(nextAngleRadian)
        } else {
            if (b.RotateAxis == "z") {
                b.ObjHandler.getTransform().roll(nextAngleRadian)
            }
        }
    }
    b.Progress = 0.75
};
MagicFunc.prototype.RotateObject = function (b, a) {
    this.nextAngle = b.FromAngle[b.RotateAxis] + a * (b.FromAngle[b.RotateAxis] - b.ToAngle[b.RotateAxis]);
    b.ObjHandler.getTransform().resetOrientation();
    nextAngleRadian = 3.1415926 * this.nextAngle / 180;
    if (b.RotateAxis == "x") {
        b.ObjHandler.getTransform().pitch(nextAngleRadian)
    } else {
        if (b.RotateAxis == "y") {
            b.ObjHandler.getTransform().yaw(nextAngleRadian)
        } else {
            if (b.RotateAxis == "z") {
                b.ObjHandler.getTransform().roll(nextAngleRadian)
            }
        }
    }
    b.Progress = a
};
MagicFunc.prototype.CalculateFingerProgress = function (h, e, a, g) {
    if (h == 0) {
        this.OnlyOneFingerTouched = true;
        if (e == 0) {
            this.FirstFinger.DownPosition.x = a;
            this.FirstFinger.DownPosition.y = g;
            this.FirstFinger.PreMovePosition.x = null;
            this.FirstFinger.PreMovePosition.y = null;
            this.FirstFinger.PreProgress.x = 0;
            this.FirstFinger.PreProgress.y = 0;
            this.FirstFinger.IsMoved = false
        } else {
            if (e == 1) {
                this.FirstFinger.UpPosition.x = a;
                this.FirstFinger.UpPosition.y = g
            } else {
                if (e == 2) {
                    this.FirstFinger.IsMoved = true;
                    if (this.FirstFinger.PreMovePosition.x == null || this.FirstFinger.PreMovePosition.y == null) {
                        this.FirstFinger.PreMovePosition.x = a;
                        this.FirstFinger.PreMovePosition.y = g
                    } else {
                        this.FirstFinger.PreMovePosition.x = this.FirstFinger.MovePosition.x;
                        this.FirstFinger.PreMovePosition.y = this.FirstFinger.MovePosition.y
                    }
                    this.FirstFinger.MovePosition.x = a;
                    this.FirstFinger.MovePosition.y = g;
                    var c = this.FirstFinger.MovePosition.x - this.FirstFinger.PreMovePosition.x;
                    var b = this.FirstFinger.MovePosition.y - this.FirstFinger.PreMovePosition.y;
                    this.FirstFinger.Progress.x = c / this.root.getScreenWidth();
                    this.FirstFinger.Progress.y = b / this.root.getScreenHeight();
                    if (this.FirstFinger.Progress.x != 0) {
                        this.FirstFinger.PreProgress.x = this.FirstFinger.Progress.x
                    }
                    if (this.FirstFinger.Progress.y != 0) {
                        this.FirstFinger.PreProgress.y = this.FirstFinger.Progress.y
                    }
                }
            }
        }
    } else {
        if (h == 1) {
            this.OnlyOneFingerTouched = false;
            if (e == 0) {
                this.OnlyOneFingerTouched = false;
                this.SecondFinger.DownPosition.x = a;
                this.SecondFinger.DownPosition.y = g;
                this.SecondFinger.PreDistance = this.GetDistance(this.FirstFinger.DownPosition, this.SecondFinger.DownPosition);
                this.ObjectGroupInfo5.InitScale = this.ObjectGroupInfo5.ObjHandler.Transform.mScale;
                this.SecondFinger.IsMoved = false
            } else {
                if (e == 1) {
                    this.SecondFinger.UpPosition.x = a;
                    this.SecondFinger.UpPosition.y = g
                } else {
                    if (e == 2) {
                        this.SecondFinger.IsMoved = true;
                        this.SecondFinger.MovePosition.x = a;
                        this.SecondFinger.MovePosition.y = g;
                        var d = this.GetDistance(this.FirstFinger.MovePosition, this.SecondFinger.MovePosition);
                        var f = 0;
                        if (d != 0) {
                            f = (d - this.SecondFinger.PreDistance) / this.DeviceInfoLength
                        }
                        this.ScaleObjectWithFinger(this.ObjectGroupInfo5, f)
                    }
                }
            }
        }
    }
};


MagicFunc.prototype.init = function () {
    var a = new CBMParser(this.root, this.groupId, this.prefix);
    var b = this;
    a.load(load1, load2, this.prefix, function (c) {
        b.teethInfo = c;
        b.getObjHandler("teeth").addGameObject(b.teethInfo.obj);
        var f = new Quaternion();
        f.setFromMatrix(b.teethInfo.upGum.rotationMat);
        b.teethInfo.obj.getTransform().setOrientation(f);
        var e = 0.05;
        b.teethInfo.obj.getTransform().setScale(e, e, e);
        $(".loading").css("display", "none");
        b.waike = b.GetObjHandler("waike");
        b.teeth4 = b.GetObjHandler("teeth4");
        b.light1_obj = b.GetObjHandler("cont_directionalLight1").findLightByName("directionalLight1");
        b.light2_obj = b.GetObjHandler("cont_directionalLight2").findLightByName("directionalLight2");
        b.light3_obj = b.GetObjHandler("cont_directionalLight3").findLightByName("directionalLight3");
        b.light4_obj = b.GetObjHandler("cont_directionalLight4").findLightByName("directionalLight4");
        b.light5_obj = b.GetObjHandler("cont_directionalLight5").findLightByName("directionalLight5");
        b.light1_obj.setDiffuseColourRGB(window.light1["num"], window.light1["num"], window.light1["num"], 1);
        b.light2_obj.setDiffuseColourRGB(window.light2["num"], window.light2["num"], window.light2["num"], 1);
        b.light3_obj.setDiffuseColourRGB(window.light3["num"], window.light3["num"], window.light3["num"], 1);
        b.light4_obj.setDiffuseColourRGB(window.light4["num"], window.light4["num"], window.light4["num"], 1);
        b.light5_obj.setDiffuseColourRGB(window.light5["num"], window.light5["num"], window.light5["num"], 1);
        if (isComputer) {
            var d = 0.5;
            b.waike.getTransform().setScale(d, d, d);
            b.teeth4.getTransform().pitch(-1.5);
            b.teeth4.getTransform().yaw(0);
            b.teeth4.getTransform().roll(0);
            b.waike.getTransform().setPosition(0, 1, 0)
        }
        window.magicFunc.curScheme = Number(window.localStorage.getItem("curScheme"))||0;
        init_totail_num = window.magicFunc.getTreatStepNum(window.magicFunc.curScheme);
        totail_num = init_totail_num;
        $totail_num.html("/" + totail_num);
        $now_num.html(now_num);
        temp_width = (now_num / totail_num) * 100 + "%";
        $progress_core.css("width", temp_width);
        window.magicFunc.playTreatStep(window.magicFunc.curScheme, 0);
        //SchemeNum = window.magicFunc.getSchemeNum()





    });




    this.FirstFinger = {
        "DownPosition": {"x": null, "y": null},
        "UpPosition": {"x": null, "y": null},
        "MovePosition": {"x": null, "y": null},
        "PreMovePosition": {"x": null, "y": null},
        "Progress": {"x": 0, "y": 0},
        "PreProgress": {"x": 0, "y": 0},
        "DampingSpeed": {"x": 0.88, "y": 0.94},
        "IsMoved": false
    };
    FirstFinger = this.FirstFinger;
    this.SecondFinger = {
        "DownPosition": {"x": null, "y": null},
        "UpPosition": {"x": null, "y": null},
        "MovePosition": {"x": null, "y": null},
        "PreMovePosition": {"x": null, "y": null},
        "Progress": {"x": 0, "y": 0},
        "PreProgress": {"x": 0, "y": 0},
        "PreDistance": null,
        "IsMoved": false
    };
    this.OnlyOneFingerTouched = false;
    this.DeviceInfoLength = Math.sqrt(this.root.getScreenWidth() * this.root.getScreenWidth() + this.root.getScreenHeight() * this.root.getScreenHeight());
    this.FrameListener = false;
    this.TouchListener = true;
    this.MinDeltaFingerProgress = 0.1;
    this.PI = Math.PI;
    this.ObjectGroupInfo5 = {
        "ObjHandler": null,
        "FromAngle": {"x": 0, "y": 0, "z": 0},
        "ToAngle": {"x": 0, "y": 360, "z": 0},
        "RotateAxis": "y",
        "ProgressLimitedType": "EndToEnd",
        "Direction": -1,
        "InitialProgress": 0,
        "Progress": 0,
        "Sensitivity": 0.8,
        "MinScale": 1,
        "MaxScale": 1.5,
        "FrameRotate": false
    };
    this.ObjectGroupInfo5.ObjHandler = this.getObjHandler("teeth2");
    ObjectGroupInfo5 = this.ObjectGroupInfo5;
    this.ObjectGroupInfo6 = {
        "ObjHandler": null,
        "FromAngle": {"x": 0, "y": 0, "z": 0},
        "ToAngle": {"x": 0, "y": 0, "z": 360},
        "RotateAxis": "z",
        "ProgressLimitedType": "EndToEnd",
        "Direction": 1,
        "InitialProgress": 0,
        "Progress": 0,
        "Sensitivity": 0.8,
        "MinScale": 1,
        "MaxScale": 1.5,
        "FrameRotate": false
    };
    this.ObjectGroupInfo6.ObjHandler = this.getObjHandler("teeth3");
    ObjectGroupInfo6 = this.ObjectGroupInfo6
};
MagicFunc.prototype.OnFrameStarted = function (a) {
    if (this.FrameListener) {
        if (this.ObjectGroupInfo6.FrameRotate) {
            this.RotateObjectWithFinger(this.ObjectGroupInfo6, this.FirstFinger.PreProgress.x);
            this.FirstFinger.PreProgress.x = this.FirstFinger.PreProgress.x * this.FirstFinger.DampingSpeed.x;
            if (Math.abs(this.FirstFinger.PreProgress.x) < this.MinDeltaFingerProgress) {
                this.ObjectGroupInfo6.FrameRotate = false
            }
        }
        if (this.ObjectGroupInfo5.FrameRotate) {
            this.RotateObjectWithFinger(this.ObjectGroupInfo5, this.FirstFinger.PreProgress.y);
            this.FirstFinger.PreProgress.y = this.FirstFinger.PreProgress.y * this.FirstFinger.DampingSpeed.y;
            if (Math.abs(this.FirstFinger.PreProgress.y) < this.MinDeltaFingerProgress) {
                this.ObjectGroupInfo5.FrameRotate = false
            }
        }
    }
};
MagicFunc.prototype.OnTouchScreen = function (b, c, e, a, d) {
    if (this.TouchListener) {
        this.CalculateFingerProgress(e, c, a, d);
        if (this.OnlyOneFingerTouched) {
            if (this.FirstFinger.IsMoved) {
                this.IsInitRotate = false;
                this.RotateObjectWithFinger(this.ObjectGroupInfo6, this.FirstFinger.Progress.y);
                this.RotateObjectWithFinger(this.ObjectGroupInfo5, this.FirstFinger.Progress.x)
            }
        }
    }
};
MagicFunc.prototype.playTreatStep = function (b, a,c) {
    this.teethInfo.playTreatStep(b, a,c)
};
MagicFunc.prototype.getSchemeNum = function () {
    return this.teethInfo.schemes.count
};
MagicFunc.prototype.getTreatStepNum = function (a) {
    return this.teethInfo.schemes.scheme[a].treatStepNum-1
};
MagicFunc.prototype.setPrevScheme = function () {
    this.curScheme--;
    if (this.curScheme < 0) {
        this.curScheme = 0
    } else {
        this.curTreatStep = 0;
        this.playTreatStep(this.curScheme, this.curTreatStep)
    }
};
MagicFunc.prototype.setNextScheme = function () {
    this.curScheme++;
    if (this.curScheme >= this.getSchemeNum()) {
        this.curScheme = this.getSchemeNum() - 1
    } else {
        this.curTreatStep = 0;
        this.playTreatStep(this.curScheme, this.curTreatStep)
    }
};
MagicFunc.prototype.playTreatStepBack = function (a) {
    this.playTreatStep(this.curScheme, a)
};
MagicFunc.prototype.playTreatStepForward = function (a) {
    this.playTreatStep(this.curScheme, a)
};
MagicFunc.prototype.showUpGum = function () {
    this.teethInfo.upGum.go.setVisible(true);
    this.teethInfo.upTeeth.go.setVisible(true);
    this.teethInfo.downGum.go.setVisible(false);
    this.teethInfo.downTeeth.go.setVisible(false);
    magicFunc.recovery_front(this.ObjectGroupInfo6, 0);
    magicFunc.recovery_front(this.ObjectGroupInfo5, 0)
};
MagicFunc.prototype.showDownGum = function () {
    this.teethInfo.upGum.go.setVisible(false);
    this.teethInfo.upTeeth.go.setVisible(false);
    this.teethInfo.downGum.go.setVisible(true);
    this.teethInfo.downTeeth.go.setVisible(true);
    magicFunc.recovery_front(this.ObjectGroupInfo6, 0);
    magicFunc.recovery_front(this.ObjectGroupInfo5, 0)
};
MagicFunc.prototype.showUpGumPlane = function () {
    this.teethInfo.upGum.go.setVisible(true);
    this.teethInfo.upTeeth.go.setVisible(true);
    this.teethInfo.downGum.go.setVisible(false);
    this.teethInfo.downTeeth.go.setVisible(false);
    if (isComputer) {
        magicFunc.recovery_front(this.ObjectGroupInfo5, 0);
        magicFunc.recovery_common(this.ObjectGroupInfo6, 0.75, 90)
    } else {
        magicFunc.recovery_front(this.ObjectGroupInfo5, 0);
        magicFunc.recovery_left(this.ObjectGroupInfo5, 0.75)
    }
};
MagicFunc.prototype.showDownGumPlane = function () {
    this.teethInfo.upGum.go.setVisible(false);
    this.teethInfo.upTeeth.go.setVisible(false);
    this.teethInfo.downGum.go.setVisible(true);
    this.teethInfo.downTeeth.go.setVisible(true);
    if (isComputer) {
        magicFunc.recovery_front(this.ObjectGroupInfo5, 0);
        magicFunc.recovery_common(this.ObjectGroupInfo6, 0.25, 270)
    } else {
        magicFunc.recovery_front(this.ObjectGroupInfo6, 0);
        magicFunc.recovery_left2(this.ObjectGroupInfo5, 0.75)
    }
};
MagicFunc.prototype.switchFrontView = function () {
    this.teethInfo.upGum.go.setVisible(true);
    this.teethInfo.upTeeth.go.setVisible(true);
    this.teethInfo.downGum.go.setVisible(true);
    this.teethInfo.downTeeth.go.setVisible(true);
    magicFunc.recovery_front(this.ObjectGroupInfo6, 0);
    magicFunc.recovery_front(this.ObjectGroupInfo5, 0)
};
MagicFunc.prototype.switchBackView = function () {
    this.teethInfo.upGum.go.setVisible(true);
    this.teethInfo.upTeeth.go.setVisible(true);
    this.teethInfo.downGum.go.setVisible(true);
    this.teethInfo.downTeeth.go.setVisible(true);
    magicFunc.recovery_left3(this.ObjectGroupInfo5, 0.25);
    magicFunc.recovery_front(this.ObjectGroupInfo6, 0)
};
MagicFunc.prototype.switchLeftView = function () {
    this.teethInfo.upGum.go.setVisible(true);
    this.teethInfo.upTeeth.go.setVisible(true);
    this.teethInfo.downGum.go.setVisible(true);
    this.teethInfo.downTeeth.go.setVisible(true);
    if (isComputer) {
        magicFunc.recovery_front(this.ObjectGroupInfo6, 0);
        magicFunc.recovery_common(this.ObjectGroupInfo5, 0.25, 270)
    } else {
        magicFunc.recovery_left4(this.ObjectGroupInfo6, 0.75);
        magicFunc.recovery_front(this.ObjectGroupInfo5, 0)
    }
};
MagicFunc.prototype.switchRightView = function () {
    this.teethInfo.upGum.go.setVisible(true);
    this.teethInfo.upTeeth.go.setVisible(true);
    this.teethInfo.downGum.go.setVisible(true);
    this.teethInfo.downTeeth.go.setVisible(true);
    if (isComputer) {
        magicFunc.recovery_front(this.ObjectGroupInfo6, 0);
        magicFunc.recovery_common(this.ObjectGroupInfo5, 0.75, 90)
    } else {
        magicFunc.recovery_right(this.ObjectGroupInfo6, 0.25);
        magicFunc.recovery_front(this.ObjectGroupInfo5, 0)
    }
};
MagicFunc.prototype.recoveryView = function () {
    magicFunc.recovery_front(this.ObjectGroupInfo6, 0);
    magicFunc.recovery_front(this.ObjectGroupInfo5, 0)
};
MagicFunc.prototype.createTestPoint = function (e, i, b) {
    this.testPointCounter++;
    var a = "testPoint_" + this.testPointCounter;
    var h = "mesh_" + a;
    var d = new BoxMesh(this.root, h, 1);
    d.fillData();
    this.root.mMeshMap[h] = d;
    var f = new MaterialAutoBuildParameters();
    f.type = ShaderType.ST_LAMBERT;
    f.color = (b == null ? "1.0 0.0 0.0 1.0" : b);
    f.alpha = "1.0";
    f.ambient = "1 1 1 1";
    f.diffuse = "1 1 1 1";
    f.specular = "1 1 1 1";
    f.shininess = "1";
    f.depth_check = "true";
    f.depth_write = "true";
    f.doubleRender = "true";
    var g = this.root.getMaterialManager().buildMaterial("mat_" + a, this.groupId, f, this.prefix);
    g.load();
    var c = this.root.getSceneManager("scene1").createGameObject("obj_" + a, this.groupId);
    c.Renderer.material = g;
    c.MeshFilter.mesh = h;
    var j = 0.5;
    c.getTransform().setScale(j, j, j);
    if (e != null) {
        c.getTransform().setPosition(e.x, e.y, e.z)
    }
    i = (i == null ? this.root.getSceneManager("scene1").getSceneRoot() : i);
    i.addGameObject(c)
};
function Destroyer(a) {
    this.callee = a
}
Destroyer.prototype.OnDestroy = function () {
    if (this.callee) {
        this.callee.clear()
    }
};
postCreateScene = function (a, b, c) {
    this.magicFunc = new MagicFunc(a, b, c);
    magicFunc.init();
    this.destroyer = new Destroyer(magicFunc);
    a.addOnDestroyCallback(destroyer.OnDestroy);
    window.magicFunc = magicFunc;
    console.log(magicFunc)
};