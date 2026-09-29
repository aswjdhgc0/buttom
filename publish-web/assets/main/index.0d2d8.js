System.register("chunks:///_virtual/game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './move.ts', './obstacle.ts', './pointchick.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, Label, Button, Vec3, math, instantiate, UITransform, sys, Canvas, Component, maingame, obstacle, pointchick;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Vec3 = module.Vec3;
      math = module.math;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      sys = module.sys;
      Canvas = module.Canvas;
      Component = module.Component;
    }, function (module) {
      maingame = module.maingame;
    }, function (module) {
      obstacle = module.obstacle;
    }, function (module) {
      pointchick = module.pointchick;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "ee990lNxkFNooON5LROEHWD", "game", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SCORE_PER_SECOND = 1; // 每秒得分
      var SCORE_PER_POINT = 1; // 气球碰到一个落点的得分
      var HIGH_SCORE_KEY = 'balloon.highScore'; // 最高分在本地存储里的键

      var game = exports('game', (_dec = ccclass('game'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property({
        tooltip: '随机 x 的最小值'
      }), _dec6 = property({
        tooltip: '随机 x 的最大值'
      }), _dec7 = property({
        tooltip: '生成时的固定 y'
      }), _dec8 = property({
        tooltip: '最短间隔（秒）'
      }), _dec9 = property({
        tooltip: '最长间隔（秒）'
      }), _dec10 = property({
        tooltip: 'point 下落速度，像素/秒'
      }), _dec11 = property({
        type: Node,
        tooltip: '障碍物模板节点：运行时由它复制出障碍物，模板自己会被隐藏'
      }), _dec12 = property({
        tooltip: '障碍物随机长度的最小值（像素）'
      }), _dec13 = property({
        tooltip: '障碍物随机长度的最大值（像素）'
      }), _dec14 = property({
        tooltip: '障碍物高度（像素）'
      }), _dec15 = property({
        tooltip: '障碍物生成时的固定 y'
      }), _dec16 = property({
        tooltip: '障碍物下落速度，像素/秒'
      }), _dec17 = property({
        tooltip: '障碍物最短出现间隔（秒）'
      }), _dec18 = property({
        tooltip: '障碍物最长出现间隔（秒）'
      }), _dec19 = property({
        tooltip: '障碍物出现后的存活时间（秒），<=0 表示一直存在到掉出屏幕'
      }), _dec20 = property({
        type: Node,
        tooltip: '暂停时显示的重新开始界面（用它的显示/隐藏来弹出）'
      }), _dec21 = property({
        type: Button,
        tooltip: '重新开始按钮'
      }), _dec22 = property({
        type: Label,
        tooltip: '重开界面上的分数 / 最高分显示'
      }), _dec23 = property({
        type: [Node],
        tooltip: '需要铺满整个可视区域的节点（背景、遮罩等）：竖屏手机的可视高度会高于设计分辨率'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(game, _Component);
        function game() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pointPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetNode", _descriptor2, _assertThisInitialized(_this));
          // 把名为 buttom 的节点拖进来
          _initializerDefineProperty(_this, "scoreLabel", _descriptor3, _assertThisInitialized(_this));
          // 左上角的实时分数
          _initializerDefineProperty(_this, "minX", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxX", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fixedY", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minDelay", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxDelay", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fallSpeed", _descriptor9, _assertThisInitialized(_this));
          // ---------- 障碍物 ----------
          _initializerDefineProperty(_this, "obstacleTemplate", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstacleMinLength", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstacleMaxLength", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstacleHeight", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstacleSpawnY", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstacleFallSpeed", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstacleMinDelay", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstacleMaxDelay", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "obstacleLifeTime", _descriptor18, _assertThisInitialized(_this));
          // ---------- 重新开始 ----------
          _initializerDefineProperty(_this, "restartUI", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "restartButton", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "restartScoreLabel", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fullscreenNodes", _descriptor22, _assertThisInitialized(_this));
          _this.running = false;
          _this.paused = false;
          _this.score = 0;
          // 本局分数
          _this.highScore = 0;
          // 历史最高分
          _this.scoreTimer = 0;
          // 攒着不足 1 秒的部分，够了就转成 1 分
          _this.spawns = [];
          // 场上的落点
          _this.obstacles = [];
          // 场上的障碍物
          _this.playerHome = new Vec3();
          // 气球初始位置
          _this.canvasUT = null;
          // 可视区域尺寸的来源
          _this.syncedWidth = 0;
          // 上次同步铺满节点时的可视尺寸
          _this.syncedHeight = 0;
          _this.onPointHit = function () {
            _this.addScore(SCORE_PER_POINT);
          };
          _this.onObstacleHit = function () {
            _this.pauseGame();
          };
          _this.onRestartClick = function () {
            _this.restartGame();
          };
          return _this;
        }
        var _proto = game.prototype;
        _proto.start = function start() {
          // 记录气球初始位置，重开时复位
          if (this.targetNode) this.playerHome.set(this.targetNode.position);
          this.canvasUT = this.findCanvasTransform();
          this.syncFullscreenNodes();

          // 障碍物模板只用来复制，运行时隐藏
          if (this.obstacleTemplate) this.obstacleTemplate.active = false;
          if (this.restartUI) this.restartUI.active = false;
          if (this.restartButton) this.restartButton.node.on(Button.EventType.CLICK, this.onRestartClick, this);
          this.paused = false;
          this.running = true;
          this.setDragEnabled(true);
          this.loadHighScore();
          this.score = 0;
          this.scoreTimer = 0;
          this.updateScoreLabels();
          this.scheduleNext();
          this.scheduleNextObstacle();
        };
        _proto.onDestroy = function onDestroy() {
          this.unscheduleAllCallbacks();
          if (this.restartButton) this.restartButton.node.off(Button.EventType.CLICK, this.onRestartClick, this);
        };
        _proto.scheduleNext = function scheduleNext() {
          var _this2 = this;
          if (!this.running) return;
          // 注意：这里必须传一个新的箭头函数，不能直接写 this.scheduleOnce(this.spawnPoint, ...)。
          // 引擎的调度器是按「回调引用」去重的：再次 schedule 同一个函数引用时，它只会更新
          // 旧定时器的 interval 然后直接 return，不再注册新定时器；而旧定时器在同一帧就被
          // 取消掉了，于是生成循环只会跑一次。
          this.scheduleOnce(function () {
            return _this2.spawnPoint();
          }, math.randomRange(this.minDelay, this.maxDelay));
        };
        _proto.scheduleNextObstacle = function scheduleNextObstacle() {
          var _this3 = this;
          if (!this.running || !this.obstacleTemplate) return;
          // 同上，必须用新的箭头函数包一层
          this.scheduleOnce(function () {
            return _this3.spawnObstacle();
          }, math.randomRange(this.obstacleMinDelay, this.obstacleMaxDelay));
        };
        _proto.spawnPoint = function spawnPoint() {
          if (!this.running) return;
          this.pruneGone();
          var point = instantiate(this.pointPrefab);
          point.name = 'point';
          var pointUT = point.getComponent(UITransform);
          var pointHalf = pointUT ? pointUT.height * 0.5 : 30;
          point.setPosition(math.randomRange(this.minX, this.maxX), this.spawnY(this.fixedY, pointHalf), 0);
          this.node.addChild(point);

          // 把目标节点、速度、回调交给这个 point
          var ctrl = point.getComponent(pointchick);
          ctrl.init(this.targetNode, this.fallSpeed, this.onPointHit);
          this.spawns.push(point);
          this.scheduleNext();
        };
        _proto.spawnObstacle = function spawnObstacle() {
          var _this4 = this;
          if (!this.running || !this.obstacleTemplate) return;
          var length = math.randomRange(this.obstacleMinLength, this.obstacleMaxLength);
          // 可见范围 x ∈ [-360, 360]，两边各留半个长度，保证整条障碍物都落在屏幕内
          var half = length * 0.5;
          var x = math.randomRange(-360 + half, 360 - half);
          var node = instantiate(this.obstacleTemplate);
          node.active = true; // 模板本身是隐藏的，复制体要打开
          node.name = 'obstacle';
          node.setPosition(x, this.spawnY(this.obstacleSpawnY, this.obstacleHeight * 0.5), 0);
          this.node.addChild(node);
          var ctrl = node.getComponent(obstacle);
          if (!ctrl) {
            // 模板上漏挂 obstacle 组件时不要把生成循环一起打断
            console.warn('[game] 障碍物模板上缺少 obstacle 组件，已跳过这次生成');
            node.destroy();
            this.scheduleNextObstacle();
            return;
          }
          ctrl.init(this.targetNode, this.obstacleFallSpeed, length, this.obstacleHeight, this.onObstacleHit);
          this.obstacles.push(node);
          if (this.obstacleLifeTime > 0) {
            this.scheduleOnce(function () {
              if (node.isValid && !_this4.paused) node.destroy();
            }, this.obstacleLifeTime);
          }
          this.scheduleNextObstacle();
        }

        /** 清掉已经销毁的引用，避免数组无限增长 */;
        _proto.pruneGone = function pruneGone() {
          for (var i = this.spawns.length - 1; i >= 0; i--) if (!this.spawns[i].isValid) this.spawns.splice(i, 1);
          for (var _i = this.obstacles.length - 1; _i >= 0; _i--) if (!this.obstacles[_i].isValid) this.obstacles.splice(_i, 1);
        };
        /** 加分并立刻刷新两处显示 */
        _proto.addScore = function addScore(value) {
          this.score += value;
          this.updateScoreLabels();
        };
        /** 暂停：只停逻辑和输入，不冻结渲染，这样重开按钮还点得动 */
        _proto.pauseGame = function pauseGame() {
          if (this.paused) return;
          this.paused = true;
          this.running = false;
          this.unscheduleAllCallbacks();

          // 冻结场上的落点和障碍物：直接关掉驱动它们的组件，
          // 不依赖跨脚本的共享状态，避免模块被打包成多份实例时失效
          for (var _iterator = _createForOfIteratorHelperLoose(this.spawns), _step; !(_step = _iterator()).done;) {
            var n = _step.value;
            this.setMoverEnabled(n, false);
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.obstacles), _step2; !(_step2 = _iterator2()).done;) {
            var _n = _step2.value;
            this.setMoverEnabled(_n, false);
          }
          this.setDragEnabled(false);

          // 结算最高分
          if (this.score > this.highScore) {
            this.highScore = this.score;
            this.saveHighScore();
          }
          this.updateScoreLabels();
          if (this.restartUI) this.restartUI.active = true;
        };
        _proto.setMoverEnabled = function setMoverEnabled(node, enabled) {
          if (!node || !node.isValid) return;
          var mover = node.getComponent(pointchick) || node.getComponent(obstacle);
          if (mover) mover.enabled = enabled;
        };
        _proto.setDragEnabled = function setDragEnabled(enabled) {
          if (!this.targetNode) return;
          var drag = this.targetNode.getComponent(maingame);
          if (drag) drag.enabled = enabled;
        };
        _proto.restartGame = function restartGame() {
          this.paused = false;

          // 清场：落点、障碍物全部销毁
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.spawns), _step3; !(_step3 = _iterator3()).done;) {
            var n = _step3.value;
            if (n.isValid) n.destroy();
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.obstacles), _step4; !(_step4 = _iterator4()).done;) {
            var _n2 = _step4.value;
            if (_n2.isValid) _n2.destroy();
          }
          this.spawns.length = 0;
          this.obstacles.length = 0;
          this.score = 0;
          this.scoreTimer = 0;
          this.updateScoreLabels();
          if (this.targetNode) this.targetNode.setPosition(this.playerHome);
          if (this.restartUI) this.restartUI.active = false;
          this.setDragEnabled(true);
          this.running = true;
          this.scheduleNext();
          this.scheduleNextObstacle();
        };
        _proto.updateScoreLabels = function updateScoreLabels() {
          if (this.scoreLabel) this.scoreLabel.string = "\u5206\u6570: " + this.score;
          if (this.restartScoreLabel) {
            this.restartScoreLabel.string = "\u672C\u5C40\u5206\u6570: " + this.score + "\n\u6700\u9AD8\u5206: " + this.highScore;
          }
        };
        _proto.loadHighScore = function loadHighScore() {
          try {
            var saved = sys.localStorage.getItem(HIGH_SCORE_KEY);
            this.highScore = saved ? parseInt(saved, 10) || 0 : 0;
          } catch (e) {
            this.highScore = 0; // 个别平台没有 localStorage，忽略即可
          }
        };

        _proto.saveHighScore = function saveHighScore() {
          try {
            sys.localStorage.setItem(HIGH_SCORE_KEY, String(this.highScore));
          } catch (e) {
            // 存不了就算了，本次运行内的最高分仍然有效
          }
        }

        /** 沿父节点往上找 Canvas，用来取真实的可视区域尺寸 */;
        _proto.findCanvasTransform = function findCanvasTransform() {
          var node = this.node;
          while (node) {
            if (node.getComponent(Canvas)) return node.getComponent(UITransform);
            node = node.parent;
          }
          return null;
        }

        /** 让背景、遮罩这类节点始终和可视区域一样大（竖屏手机的可视高度会高于设计分辨率） */;
        _proto.syncFullscreenNodes = function syncFullscreenNodes() {
          var ut = this.canvasUT;
          if (!ut || ut.width <= 0 || ut.height <= 0) return;
          if (ut.width === this.syncedWidth && ut.height === this.syncedHeight) return; // 尺寸没变就跳过
          this.syncedWidth = ut.width;
          this.syncedHeight = ut.height;
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.fullscreenNodes), _step5; !(_step5 = _iterator5()).done;) {
            var node = _step5.value;
            if (!node || !node.isValid) continue;
            var nodeUT = node.getComponent(UITransform);
            if (nodeUT) nodeUT.setContentSize(ut.width, ut.height);
          }
        }

        /** 生成高度：配置值不够高时自动抬到可视区域之上，避免在长屏手机上凭空出现 */;
        _proto.spawnY = function spawnY(configured, halfSize) {
          var ut = this.canvasUT;
          if (!ut || ut.height <= 0) return configured;
          return Math.max(configured, ut.height * 0.5 + halfSize + 30);
        };
        _proto.update = function update(deltaTime) {
          this.syncFullscreenNodes();
          if (!this.running) return; // 暂停/结算时不再计时

          // 每秒 +1：攒够一整秒才加分，避免帧率影响总分
          this.scoreTimer += deltaTime;
          while (this.scoreTimer >= 1) {
            this.scoreTimer -= 1;
            this.addScore(SCORE_PER_SECOND);
          }
        };
        return game;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pointPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minX", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -330;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maxX", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 330;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fixedY", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 700;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "minDelay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "maxDelay", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "fallSpeed", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 300;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "obstacleTemplate", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "obstacleMinLength", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 140;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "obstacleMaxLength", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 360;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "obstacleHeight", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 42;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "obstacleSpawnY", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 700;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "obstacleFallSpeed", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 260;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "obstacleMinDelay", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.2;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "obstacleMaxDelay", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.6;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "obstacleLifeTime", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "restartUI", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "restartButton", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "restartScoreLabel", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "fullscreenNodes", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./game.ts', './move.ts', './obstacle.ts', './pointchick.ts'], function () {
  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/move.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, UITransform, Vec3, Canvas, math, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Canvas = module.Canvas;
      math = module.math;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "31a44MVDeNEE6BmGWkkEL/f", "move", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var maingame = exports('maingame', (_dec = ccclass('maingame'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(maingame, _Component);
        function maingame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.touchId = null;
          // 正在拖拽的手指 id
          _this.offset = new Vec3();
          // 按下点与节点中心的偏移
          _this.center = new Vec3();
          // 屏幕中心（父节点坐标系）
          _this.limit = new Vec3(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0);
          return _this;
        }
        var _proto = maingame.prototype;
        // 中心可偏离屏幕中心的距离
        _proto.onEnable = function onEnable() {
          this.refreshBounds();
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.toParentSpace = function toParentSpace(e) {
          var ui = e.getUILocation();
          var parentUT = this.node.parent.getComponent(UITransform);
          return parentUT.convertToNodeSpaceAR(new Vec3(ui.x, ui.y, 0));
        }

        /** 算出屏幕边界：气球整个都要留在可见区域内 */;
        _proto.refreshBounds = function refreshBounds() {
          var parent = this.node.parent;
          var parentUT = parent && parent.getComponent(UITransform);
          var canvasUT = this.findCanvasTransform();
          var selfUT = this.node.getComponent(UITransform);
          if (!parentUT || !canvasUT || !selfUT) return; // 取不到就退化成不限制，避免把气球钉死在中间

          // Canvas 的尺寸就是可见区域（alignCanvasWithScreen），把它的中心换算到父节点坐标系
          parentUT.convertToNodeSpaceAR(canvasUT.convertToWorldSpaceAR(new Vec3()), this.center);

          // 中心能走的距离 = 屏幕的一半 - 气球自身的一半
          this.limit.set(Math.max(canvasUT.width * 0.5 - selfUT.width * 0.5, 0), Math.max(canvasUT.height * 0.5 - selfUT.height * 0.5, 0), 0);
        }

        /** 沿父节点往上找挂着 Canvas 的节点 */;
        _proto.findCanvasTransform = function findCanvasTransform() {
          var node = this.node;
          while (node) {
            if (node.getComponent(Canvas)) return node.getComponent(UITransform);
            node = node.parent;
          }
          return null;
        };
        _proto.onTouchStart = function onTouchStart(e) {
          if (this.touchId !== null) return; // 已有一根手指在控制，忽略其它手指
          this.touchId = e.getID();
          var touchPos = this.toParentSpace(e);
          // 记录偏移，避免按下瞬间节点“跳”到手指中心
          Vec3.subtract(this.offset, this.node.position, touchPos);
        };
        _proto.onTouchMove = function onTouchMove(e) {
          if (e.getID() !== this.touchId) return;
          var touchPos = this.toParentSpace(e);
          // 限制在屏幕内，拖到边上也只贴着边停住
          this.node.setPosition(math.clamp(touchPos.x + this.offset.x, this.center.x - this.limit.x, this.center.x + this.limit.x), math.clamp(touchPos.y + this.offset.y, this.center.y - this.limit.y, this.center.y + this.limit.y), 0);
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (e.getID() === this.touchId) this.touchId = null;
        };
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return maingame;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/obstacle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, BoxCollider2D, Size, Collider2D, Contact2DType, Canvas, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      BoxCollider2D = module.BoxCollider2D;
      Size = module.Size;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Canvas = module.Canvas;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "fe9d3gwVINM24vnDkINpIA/", "obstacle", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // 兜底用：取不到 Canvas 时才退回设计分辨率的一半高度
      var DESIGN_HALF_HEIGHT = 640;
      var obstacle = exports('obstacle', (_dec = ccclass('obstacle'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(obstacle, _Component);
        function obstacle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.target = null;
          // 要撞的节点（气球）
          _this.speed = 260;
          // 下落速度，像素/秒
          _this.onHit = null;
          // 撞到气球后的回调，交给管理器
          _this.alive = true;
          // 防止重复触发
          _this.canvasUT = null;
          return _this;
        }
        var _proto = obstacle.prototype;
        // 可视区域尺寸的来源
        _proto.init = function init(target, speed, length, height, onHit) {
          this.target = target;
          this.speed = speed;
          this.onHit = onHit;
          this.alive = true;
          this.applySize(length, height);
        }

        /** 把随机长度同时应用到碰撞轮廓和贴图子节点上 */;
        _proto.applySize = function applySize(length, height) {
          var ut = this.node.getComponent(UITransform);
          if (ut) ut.setContentSize(length, height);
          var collider = this.getComponent(BoxCollider2D);
          if (collider) {
            collider.size = new Size(length, height);
            collider.apply(); // size 的 setter 不会重建夹具，必须显式 apply
          }

          var visual = this.node.children.length > 0 ? this.node.children[0] : null;
          var visualTransform = visual && visual.getComponent(UITransform);
          if (visualTransform) visualTransform.setContentSize(length, height);
        };
        _proto.onEnable = function onEnable() {
          this.canvasUT = this.findCanvasTransform();
          // 注册 2D 物理碰撞回调（前提是同一个节点上的 RigidBody2D 打开了 enabledContactListener）
          var collider = this.getComponent(Collider2D);
          if (collider) collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        /** 沿父节点往上找 Canvas，用来取真实的可视区域尺寸 */;
        _proto.findCanvasTransform = function findCanvasTransform() {
          var node = this.node;
          while (node) {
            if (node.getComponent(Canvas)) return node.getComponent(UITransform);
            node = node.parent;
          }
          return null;
        };
        _proto.onDisable = function onDisable() {
          var collider = this.getComponent(Collider2D);
          if (collider) collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        };
        _proto.update = function update(deltaTime) {
          if (!this.alive) return;

          // 1. 向下移动
          var p = this.node.position;
          this.node.setPosition(p.x, p.y - this.speed * deltaTime, 0);

          // 2. 完全掉出屏幕底部后再销毁
          var halfHeight = this.node.getComponent(UITransform).height * 0.5;
          var halfScreen = this.canvasUT && this.canvasUT.height > 0 ? this.canvasUT.height * 0.5 : DESIGN_HALF_HEIGHT;
          if (this.node.position.y < -(halfScreen + halfHeight)) {
            this.node.destroy();
          }
        }

        // 2D 物理碰撞回调：和气球撞上就通知管理器暂停并弹出重开界面。
        // 障碍物自己不销毁，停在原地让玩家看清是撞到了哪一根。
        ;

        _proto.onBeginContact = function onBeginContact(_selfCollider, otherCollider, _contact) {
          var _this$onHit;
          if (!this.alive) return;
          if (this.target && otherCollider.node !== this.target) return; // 只认气球

          this.alive = false;
          (_this$onHit = this.onHit) == null || _this$onHit.call(this);
        };
        return obstacle;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pointchick.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Collider2D, Contact2DType, Canvas, UITransform, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Collider2D = module.Collider2D;
      Contact2DType = module.Contact2DType;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "332bd95DktCKK3uVqo1k1JE", "pointchick", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // 兜底用：取不到 Canvas 时才退回设计分辨率的一半高度
      var DESIGN_HALF_HEIGHT = 640;
      var pointchick = exports('pointchick', (_dec = ccclass('pointchick'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(pointchick, _Component);
        function pointchick() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.target = null;
          // 要撞的节点（buttom）
          _this.speed = 300;
          // 下落速度，像素/秒
          _this.onHit = null;
          // 撞到后的回调，交给管理器
          _this.alive = true;
          // 防止重复触发
          _this.canvasUT = null;
          return _this;
        }
        var _proto = pointchick.prototype;
        // 可视区域尺寸的来源
        _proto.init = function init(target, speed, onHit) {
          this.target = target;
          this.speed = speed;
          this.onHit = onHit;
          this.alive = true;
        };
        _proto.onEnable = function onEnable() {
          this.canvasUT = this.findCanvasTransform();
          // 注册 2D 物理碰撞回调（前提是同一个节点上的 RigidBody2D 打开了 enabledContactListener）
          var collider = this.getComponent(Collider2D);
          if (collider) collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        /** 沿父节点往上找 Canvas，用来取真实的可视区域尺寸 */;
        _proto.findCanvasTransform = function findCanvasTransform() {
          var node = this.node;
          while (node) {
            if (node.getComponent(Canvas)) return node.getComponent(UITransform);
            node = node.parent;
          }
          return null;
        };
        _proto.onDisable = function onDisable() {
          var collider = this.getComponent(Collider2D);
          if (collider) collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        };
        _proto.update = function update(deltaTime) {
          if (!this.alive) return;

          // 1. 向下移动
          var p = this.node.position;
          this.node.setPosition(p.x, p.y - this.speed * deltaTime, 0);

          // 2. 完全掉出屏幕底部后再销毁
          //    屏幕下边按 Canvas 的真实高度算（竖屏手机的可视高度会高于设计分辨率），
          //    再减去自身半高，确保整颗球都离开画面
          var halfHeight = this.node.getComponent(UITransform).height * 0.5;
          var halfScreen = this.canvasUT && this.canvasUT.height > 0 ? this.canvasUT.height * 0.5 : DESIGN_HALF_HEIGHT;
          if (this.node.position.y < -(halfScreen + halfHeight)) {
            this.node.destroy();
            return;
          }
        }

        // 2D 物理碰撞回调：夹具真正相交时触发，形状按圆/多边形精确判定，
        // 取代原来用 UITransform 包围盒做的矩形近似
        ;

        _proto.onBeginContact = function onBeginContact(_selfCollider, otherCollider, _contact) {
          var _this$onHit;
          if (!this.alive) return;
          if (this.target && otherCollider.node !== this.target) return; // 只认目标节点

          this.alive = false; // 先上锁，避免同一帧重复计数
          this.node.destroy(); // 销毁自己
          (_this$onHit = this.onHit) == null || _this$onHit.call(this); // 通知管理器加分
        };

        return pointchick;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});